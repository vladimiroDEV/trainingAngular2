/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx'
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text"
        placeholder ="sarch" class="form-control">
        <br />
        <br />
        <br />
        <br />
        <div *ngIf = "isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>

          <br />
        <br />
        <br />
        <hr />
    `,
    providers:[PostService, HTTP_PROVIDERS]
})
export class AppComponent   { // implements OnInit {

constructor() {
    var keyups = Observable
                        .fromEvent($("#search"), "keyup")
                        .map(e=>e.target.value)
                        .filter(text=>text.length >= 3)
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(searchTerm=>{
                                var  url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm
                             var promise=    $.getJSON(url);
                             return Observable.fromPromise(promise);

                        });

    var subscription =  keyups.subscribe(data => console.log(data));
    subscription.unsubscribe();
   

   console.log(new Observable());
}


    var   isLoading = true;

    // constructor(private _postService: PostService){
    //     //this._postService.createPost({userId: 1, title:"a",body: "b"});
                
    // }
    // ngOnInit(){
    //     this._postService.getPosts()
    //             .subscribe(post=>{
    //                 this.isLoading = false;
    //                 console.log(post[0].id)
    //             });
    // }
    
//--------------
  
    // constructor(){
    //     var keyups =Observable.fromEvent($('#search'), "keyup")
    //     .map(e=>e.target.value)
    //     .filter(text =>text.length >=3)
    //     .debounceTime(400)
    //    .distinctUntilChanged()
    //    .flatMap(searchTerm => {
    //        var = url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
    //        var promise =  $.getJSON(url);

    //          console.log(new Observable);

    //        return Observable.fromPromise(promise);

      
            
    //    });

    //     var subscription=  keyups.subscribe(data=>console.log(data));
    //    // subscription.unsubscribe();
    //     // keyups.subscribe(function(data){
    //     //     console.log(data);
    //     }
        //parameters : callback fn and delay
    // var debounced = _.debounce(function(text){

    //  var = url = "https://api.spotify.com/v1/search?type=artist&q="+ text;
    //         $.getJSON(url, function(artists) {
    //             cnsole.log(artists);
    //     }, 400)

    //     $("#serach").keyup(function(e){
    //         var text = e.targt.value;
    //         if(text.length < 3 )
    //         return;
    //        debounced(text);
    //         })


    //     });
    
}