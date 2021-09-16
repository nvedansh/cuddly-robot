import { Injectable } from '@angular/core';
import { messages } from './messages';
import { botReplies, gifsLinks, imageLinks } from './bot-replies';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPostMsgDetails } from './chatType.type';

@Injectable()
export class ChatService {


  loadMessages() {
    return messages;
  }

  loadBotReplies() {
    return botReplies;
  }

  reply(message: string) {
    // const botReply: any =  this.loadBotReplies()
    //   .find((reply: any) => message.search(reply.regExp) !== -1);

    // if (botReply.reply.type === 'quote') {
    //   botReply.reply.quote = message;
    // }

    // if (botReply.type === 'gif') {
    //   botReply.reply.files[0].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
    // }

    // if (botReply.type === 'pic') {
    //   botReply.reply.files[0].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    // }

    // if (botReply.type === 'group') {
    //   botReply.reply.files[1].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
    //   botReply.reply.files[2].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
    // }

    // botReply.reply.text = botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
    // return { ...botReply.reply };
    const msg = {
      sender: "Rasa1",
      message: "Hi"
    }

    const headers = {
      "Content-Type": "application/json"
    }

    return this.postMessage(msg, headers)
  }

  private SERVER_URL = "http://localhost:5005/webhooks/rest/webhook";
  constructor(private httpClient: HttpClient) { }

  postMessage(message: any, headers: any): Observable<IPostMsgDetails> {
    return this.httpClient.post<IPostMsgDetails>(this.SERVER_URL, message, { headers })
      .pipe(
        catchError((error) => {
          console.log('Vedansh')
          console.log(error)
          this.handleError(error)
          return throwError(error);
        })
      );
  }

  handleError(error: any) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
  }
}
