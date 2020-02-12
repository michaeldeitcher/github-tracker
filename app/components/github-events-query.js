import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { task } from 'ember-concurrency';

export default class GithubEventsQuery extends Component {
  @tracked owner = "michaeldeitcher";
  @tracked repo = "force-graph-three";
  @tracked eventType = "";

  @(task(function*() {
    let response = yield fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/events`);
    let json = yield response.json();
    this.args.onEventsReceived(json);
  }).restartable()) fetchEvents;

  @action
  updateOwner(value) {
    window.console.info(value);
    this.owner = value;
  }

  @action
  updateRepo(value) {
    this.repo = value;
  }

  @action
  updateEventType(value) {
    this.eventType = value;
  }

  @action
  retrieveEvents() {
    this.fetchEvents.perform();
  }
}
