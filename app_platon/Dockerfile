FROM python:3 as base


RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install -r requirements.txt