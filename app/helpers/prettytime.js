import { helper } from "@ember/component/helper";

function prettytime([string]) {
  return new Date(string);
}

export default helper(prettytime);
