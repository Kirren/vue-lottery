import $ from 'jquery'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'Lottery',
      numbers: [],
      numbersFull: false
    }
  },
  methods: {
    toggleNumbers: function (e) {
      let clickedButton = e.target
      if (this.numbers.length < 12) { // array not full
        // console.log(this.numbers.indexOf(clickedButton.innerText))
        this.numbers.indexOf(clickedButton.innerText) < 0 ? this.addToSelected(clickedButton) : this.removeFromSelected(clickedButton)
      } else if (this.numbers.length === 12) {
        this.colorNumbers()
      } else {
        if (this.numbers.indexOf(clickedButton.innerText) >= 0) {
          this.removeFromSelected(clickedButton)
        }
      }
      console.log('toggle ' + this.numbers)
    },
    addToSelected: function (item) {
      if (typeof item === 'number') {
        this.numbers.push(item)
      } else if (typeof item === 'object') {
        this.numbers.push(item.innerText)
      }
      this.highlightNumber(item)
      console.log('add ' + this.numbers)
    },
    removeFromSelected: function (item) {
      let positionInArray = this.numbers.indexOf(item.innerText)
      this.numbers.splice(positionInArray, 1)
      this.highlightNumber(item)
      console.log('remove ' + this.numbers)
    },
    randomNumbers: function () {
      if (this.numbers.length > -1) {
        this.deleteNumbers()
      }
      let i = 0
      while (i < 12) {
        let min = 1
        let max = 45
        let rand = Math.floor((Math.random() * max) + min) + ''
        this.numbers.push(rand)
        $('.number-btn').each(function () {
          if ($(this).html() === rand) {
            $(this).addClass('btn-success')
          }
        })
        i++
      }
      console.log('rand ' + this.numbers)
    },
    deleteNumbers: function () {
      $('.number-btn').removeClass('btn-info btn-success')
      this.numbers = []
      console.log('delete ' + this.numbers)
    },
    colorNumbers: function () {
      if (this.numbers.length === 12) {
        $('.btn-info').each(function () {
          $(this).addClass('btn-success').removeClass('btn-info')
        })
      }
      console.log('color all ' + this.numbers)
    },
    highlightNumber: function (button) {
      console.log('highlight some ' + this.numbers)
      if (this.numbers.indexOf(button.innerHTML) > 0) {
        console.log('-' + button.innerHTML + ' is in ' + this.numbers)
        $(button).addClass('btn-info')
      } else if (this.numbers.indexOf(button.innerHTML) < 0) {
        console.log('-' + button.innerHTML + ' is not in ' + this.numbers)
        $(button).removeClass('btn-info')
      }
    },
    saveNumbers: function () {
      console.log(typeof $('.btn'))
    }
  }
}
