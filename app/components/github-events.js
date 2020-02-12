import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class GithubEvents extends Component {
  @tracked eventData = [];

  @action
  updateEventList( value ) {
    this.eventData = value;
  }
}
