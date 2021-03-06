import { Component, ViewChild } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { Message } from '@stomp/stompjs';
import { Observable, Subscription } from 'rxjs';
import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { interval } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    socket: any;
    from: String = 'VlGgU-60-1537473119438';
    to: String = 'kFXrd-56-1537473112085';
    url: String = 'https://server.febrafar.hom.stefaniniinspiring.com.br/singleinstance/chat';
    topic: String = '/queue/message/';
    stompClient;
    connectHeaders: {
        "actorId": "kFXrd-56-1537473112085",
        "requestId": "kFXrd-56-1537473112085"
    };
    debug: Boolean = true;
    // Stream of messagesQueue
    list;

    private subscription: Subscription;
    public messagesQueue: Observable<Message>;

    // Subscription status
    public subscribed: boolean;

    // Array of historic message (bodies)
    public mq: Array<string> = [];

    // A count of messagesQueue received
    public count = 0;
    blocks = 0;
    lastBlockTimestamp = 0;
    blockMessages = 0;
    blockSize = 2;
    displayBlockMessages = 0;
    displayBestMessages = 0;
    displayAvgMessages = 0;

    recording: Boolean = true;
    sub;
    lastMsg = {
        timestamp: 0
    };
    config: AngularFirestoreDocument<any>;

    constructor(
        private _stompService: StompService,
        private _stompConfig: StompConfig,
        private afs: AngularFirestore
    ) {

    }

    ngOnInit() {
        this.config = this.afs.doc('config/configs');

        this.config.snapshotChanges().forEach(
            config => {
                this.url = config.payload.data().url;
                this.to = config.payload.data().userId;
                this.connect();
            });

    }

    connect() {
        const stompConfig = {
            headers: {
                actorId: this.to,
                requestId: this.to
            },
        };

        this.subscribed = false;

        this._stompConfig.url = new SockJS(this.url)
        this._stompConfig.reconnect_delay = 5000;
        this._stompConfig.headers = stompConfig.headers;
        this._stompConfig.debug = false;
        this._stompService.disconnect();
        this._stompService.initAndConnect();

        this.subscribe();

        this.list = document.getElementById('list');

        const source = interval(this.blockSize * 1000);
        this.sub = source.subscribe(() => this.updateMetrics());
    }

    updateMetrics() {
        this.blocks++;

        this.displayBlockMessages = this.blockMessages;
        if (this.displayBestMessages < this.displayBlockMessages) {
            this.displayBestMessages = this.displayBlockMessages;
        }
        this.blockMessages = 0;

        if (this.displayBlockMessages !== 0) {
            this.displayAvgMessages = Math.round((this.displayAvgMessages + this.displayBlockMessages) / 2);
        }
        
    }

    public subscribe() {
        if (this.subscribed) {
            return;
        }

        // Stream of messagesQueue
        this.messagesQueue = this._stompService.subscribe(`/topic/message.${this.to}`);

        // Subscribe a function to be run on_next message
        this.subscription = this.messagesQueue.subscribe(this.on_next);

        this.subscribed = true;
    }

    public unsubscribe() {
        if (!this.subscribed) {
            return;
        }

        // This will internally unsubscribe from Stomp Broker
        // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
        this.subscription.unsubscribe();
        this.subscription = null;
        this.messagesQueue = null;

        this.subscribed = false;
    }

    ngOnDestroy() {
        this.unsubscribe();
        this.sub.unsubscribe();
    }

    /** Consume a message from the _stompService */
    public on_next = (message: Message) => {

        this.count++;

        let msg = JSON.parse(message.body);

        this.blockMessages++;

        if (this.lastMsg.timestamp !== 0) {
            let diff = msg.timestamp - this.lastMsg.timestamp;
            msg.diff = diff;
        }
        this.lastMsg = msg;

        if (this.mq.length > 100) {
            this.mq.shift();
        }
        this.mq.push(msg);
        setTimeout(() => {
            this.list.scrollTop = this.list.scrollHeight;
        }, 100);
    }
}
