angular
  .module("todoApp")
  .controller("ListController", ListController);

  function ListController() {

    var vm = this;

    vm.list = {
        name: 'ToDo List',
        tasks: [
            {
              id: 1,
              name: 'Take out Trash',
              complete: false
            },
            {
              id: 2,
              name: 'Buy grandma a present',
              complete: false
            },
            {
              id: 3,
              name: 'Clean out car',
              complete: true
            },
            {
              id: 4,
              name: 'Fix bathroom sink',
              complete: false
            }
        ]
    }

  }
