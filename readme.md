# JOB-ORCHESTRATOR-WS

Easy to deploy job orchestrator using AWS Websocket API and AWS Dynamo DB.

This project creates a simple solution to a client to communicate with an asynchronous API by creating a websocket which the client can request and receive responses from one to multiple third-parties APIs.

The image bellow shows an example for a client requesting an asynchronous third-party API and receiving the response via websocket:
![communication](/assets/communication.png)

## Setup
  1. Install dependencies with `npm i`
  2. Deploy the project with `sls deploy --stage [dev|prod]`

## Running Local:
  1. Run this project with `sls offline`
  2. Install a WebSocket test tool such as wscat `npm install -g wscat`
  3. Connects to the host ws://localhost:3001 using `wscat -c localhost:3001`
  4. Do a POST to http://localhost:3000/storeJob with a body such as: 
  ```
  {
	  "jobId": "10",
	  "payload": {
		  "msg": "Hello"
	  }
  }
  ```
  5. Request the job using the client (ex.: wscat) with the message `{action:"requestJob", jobId:"10"}`
