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
  @tracked eventData = A();
  @tracked eventTypes = A();
  @tracked filter = "All Events";

  get filteredEventData() {
    if(this.filter === "All Events")
      return this.eventData;
    else
      return this.eventData.filter( e => e.type == this.filter );
  }

  @task(function*() {
    let response = yield  fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/events`);
    let json =  yield response.json();

    this.eventData = A();
    this.eventTypes = A();
    this.eventTypes.pushObject('All Events');
    json.forEach( element => {
      if(!this.eventTypes.find((o) => o == element.type))
        this.eventTypes.pushObject(element.type);

      let e = new EventData();
      e.type = element.type;
      e.actorName = element.actor.login;
      e.createdAt = element.created_at;
      this.eventData.pushObject(e);
    });
    this.args.onEventsReceived(this.filteredEventData);
  }) fetchEvents;

  @action
  selectFilter(eventType) {
    this.filter = eventType;
    this.args.onEventsReceived(this.filteredEventData);
  }

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
