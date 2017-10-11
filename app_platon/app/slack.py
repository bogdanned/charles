import os
from slackclient import SlackClient

SLACK_TOKEN = 'xoxb-254478435541-qnywnHba59JnAHJfeXQyBRVv'
sc = SlackClient(SLACK_TOKEN)

sc.api_call(
  "channels.join",
  channel="#general"
)

sc.api_call(
  "chat.postMessage",
  channel="#general",
  text="Hello from Python! :tada:",
)
