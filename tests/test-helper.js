import Application from 'uzzi-website/app';
import config from 'uzzi-website/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
