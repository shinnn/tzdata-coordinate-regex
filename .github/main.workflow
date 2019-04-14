workflow "Test" {
  on = "push"
  resolves = ["npm"]
}

action "npm" {
  uses = "shinnn/actions-npm-alpine@master"
  args = "install-ci-test"
}
