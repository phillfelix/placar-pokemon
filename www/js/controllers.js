angular.module('pokemon-score.controllers', [])
  .controller('cards', function($scope, $ionicModal) {

    $scope.pokemonList = [];

    $ionicModal.fromTemplateUrl('new-pokemon.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.newPokemonModal = modal;
    });
    $scope.openNewPokemon = function() {
      $scope.newPokemonModal.show();
    };
    $scope.closeNewPokemon = function() {
      $scope.newPokemonModal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.newPokemonModal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    $scope.addPokemon = function(data) {
      console.log(data);
      $scope.pokemonList.push({
        name: data.name,
        psMax: data.ps,
        ps: data.ps,
        confused: false,
        paralized: false,
        asleep: false,
        poisoned: false,
        burnt: false
      });
      data.name = '';
      data.ps = '';
      $scope.newPokemonModal.hide();
    };

    $scope.clearPokemon = function() {
      $scope.pokemonList.splice(0,$scope.pokemonList.length);
    }

    $scope.damage = function(pokemon) {
      pokemon.ps = pokemon.ps - 10;
    };

    $scope.heal = function(pokemon) {
      pokemon.ps = pokemon.ps + 10;
    };

    $scope.toggleConfused = function(pokemon) {
      pokemon.confused = !pokemon.confused;
      console.log(pokemon.confused);
    };

    $scope.toggleParalized = function(pokemon) {
      pokemon.paralized = !pokemon.paralized;
      console.log(pokemon.paralized);
    };

    $scope.toggleAsleep = function(pokemon) {
      pokemon.asleep = !pokemon.asleep;
      console.log(pokemon.asleep);
    };

    $scope.togglePoisoned = function(pokemon) {
      pokemon.poisoned = !pokemon.poisoned;
      console.log(pokemon.poisoned);
    };

    $scope.toggleBurnt = function(pokemon) {
      pokemon.burnt = !pokemon.burnt;
      console.log(pokemon.burnt);
    };

  });
