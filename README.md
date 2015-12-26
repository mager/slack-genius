# Slack Genius

_A Slackbot that searches genius.com_

In this tutorial, I'll show you how to make a Slackbot that receives input through a [slash command](https://api.slack.com/slash-commands) and sends a request to an API.

## Installation

Clone the repo and then install dependencies:

    git clone git@github.com:mager/slack-genius.git
    cd slack-genius
    npm i


Get an access token from Genius:

`https://api.genius.com/oauth/authorize?client_id=&redirect_uri=&response_type=code`

<!-- TODO: Add more here -->


## Usage

In Slack, send slash commands to /genius:

    /genius Kendrick Lamar Poetic Justice


## License

The MIT License (MIT)
Copyright (c) 2016 Andrew Mager

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
