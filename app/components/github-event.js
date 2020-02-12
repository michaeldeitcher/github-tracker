import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class GithubEvent extends Component {
  @tracked data = {};
}
