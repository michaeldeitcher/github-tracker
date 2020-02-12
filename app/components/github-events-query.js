import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { A } from '@ember/array';
import { task } from 'ember-concurrency';

class EventData {
  @tracked type;
  @tracked actorName;
  @tracked createdAt;
}

export default class GithubEventsQuery extends Component {
  @tracked owner = "michaeldeitcher";
  @tracked repo = "force-graph-three";
  @tracked eventTypes = A([]);

  @task(function*() {
    let response = yield  fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/events`);
    let json =  yield response.json();
    let eventData = A([]);
    json.forEach( element => {
      if(!this.eventTypes.find((o) => o == element.type))
        this.eventTypes.pushObject(element.type);

      let e = new EventData();
      e.type = element.type;
      e.actorName = element.actor.login;
      e.createdAt = element.created_at;
      eventData.pushObject(e);
    });
    this.args.onEventsReceived(eventData);
  }) fetchEvents;

  @action
  updateOwner(value) {
    this.owner = value;
  }

  @action
  updateRepo(value) {
    this.repo = value;
  }

  @action
  retrieveEvents() {
    this.fetchEvents.perform();
  }
}
