import os
from slackclient import SlackClient

SLACK_TOKEN = 'xoxp-67269840914-67272102882-255209948774-c37a10ea18fb0a88d6aea5211c272047'
slack_client = SlackClient(SLACK_TOKEN)


# Print Tests
print(slack_client.api_call("api.test"))
print(slack_client.api_call("auth.test"))

# {u'args': {u'token': u'xoxp-67269840914-67272102882-255209948774-c37a10ea18fb0a88d6aea5211c272047'}, u'ok': True}


# Api
