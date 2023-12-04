# How can I know if my IP isn't ratelimited?
Your console should throw something like :
```Provided token: test
Preparing to connect to the gateway...
[WS => Manager] Manager was destroyed. Called by:
Error [MANAGER_DESTROYED]: Manager was destroyed.
```
And if you're ratelimited, you should see something like :
```
Preparing to connect to the gateway... 
Hit a 429 while executing a request.
    Global : false
    Method : get
    Path : /gateway/bot
    Route : /gateway/bot
    Limit : Infinity
    Timeout : 500ms
    Sublimit: 66550000ms
```