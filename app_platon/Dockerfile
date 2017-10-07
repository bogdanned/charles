FROM python:3 as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt \
     intents.json \
     model.tflearn.index \
     model.tflearn.meta \
     training_data \
     checkpoint \
     data_structure_creation.py \
     model.tflearn.data-00000-of-00001 \
     ./

COPY app/ app/

RUN pip install -r requirements.txt

ENV FLASK_APP=app/index.py

EXPOSE 5000

ENTRYPOINT ["flask","run","--host=0.0.0.0"]
