var bankInput = null;
$("#input_bank").chosen({no_results_text: "Oops, nothing found!", width: "40%", allow_single_deselect: true}); 
$("#bankSearch").click(function() {
  bankInput = document.getElementById('input_bank').value;
  bankQuery(bankInput);
});
document.getElementById("input_bank").addEventListener("keydown", function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      bankInput = document.getElementById('input_bank').value;
      bankQuery(bankInput);
    }
}, false);

function bankQuery(bankInput) {
  for (var i = 0; i < banksArray.length; i++) {
    if (bankInput.toLowerCase() === banksArray[i].name) {
      if (banksArray[i].supported == true) {
        $(".alert-warning").hide();
        $(".alert-danger").hide();
        $(".alert-success").fadeIn();
        // $('body').toggleClass('clicked1');
        // $('.container-fluid').toggleClass('clicked1');
        // $('html').toggleClass('clicked1');
        return;
      } else if (banksArray[i].soonsupport === true) {
        $(".alert-success").hide();
        $(".alert-danger").hide();
        $(".alert-warning").fadeIn();
        // $('body').toggleClass('clicked2');
        // $('.container-fluid').toggleClass('clicked2');
        // $('html').toggleClass('clicked2');
        return;
      }; 
    } else if (banksArray[i].supported == false) {
      $(".alert-warning").hide();
      $(".alert-success").hide();
      $(".alert-danger").fadeIn();
      // $('body').toggleClass('clicked3');
      // $('.container-fluid').toggleClass('clicked3');
      // $('html').toggleClass('clicked3');
      return;
    };
  };
};

var banksArray = [
        {
          name: 'american express',
          supported: true,
          soonsupport: false
        },
        {
          name: 'bank of america', 
          supported: true,
          soonsupport: false
        },
        {
          name: 'citi',
          supported: true,
          soonsupport: false
        },
        {
          name: 'citibank',
          supported: true,
          soonsupport: false
        },
        {
          name: 'chase',
          supported: true,
          soonsupport: false
        },
        {
          name: 'capital one',
          supported: true,
          soonsupport: false
        },
        {
          name: 'j.p. morgan',
          supported: true,
          soonsupport: false
        },
        {
          name: 'jp morgan',
          supported: true,
          soonsupport: false
        },
        {
          name: 'merrill lynch',
          supported: true,
          soonsupport: false
        },
        {
          name: 'u.s. trust',
          supported: true,
          soonsupport: false
        },
        {
          name: 'us trust',
          supported: true,
          soonsupport: false
        },
        {
          name: 'wells fargo',
          supported: true,
          soonsupport: false
        },
        {
          name: 'ncsecu',
          supported: false,
          soonsupport: true
        },
        {
          name: 'nc state employees credit union',
          supported: false,
          soonsupport: true
        },
        {
          name: 'pnc',
          supported: false,
          soonsupport: false
        },
        {
          name: 'hsbc',
          supported: false,
          soonsupport: false
        },
        {
          name: 'bank of new york mellon',
          supported: false,
          soonsupport: false
        },
        {
          name: 'us bancorp',
          supported: false,
          soonsupport: false
        },
        {
          name: 'u.s. bancorp',
          supported: false,
          soonsupport: false
        },
        {
          name: 'suntrust',
          supported: false,
          soonsupport: false
        },
        {
          name: 'state street corp',
          supported: false,
          soonsupport: false
        },
        {
          name: 'state street',
          supported: false,
          soonsupport: false
        },
        {
          name: 'bbt',
          supported: false,
          soonsupport: false
        },
        {
          name: 'bb&t',
          supported: false,
          soonsupport: false
        },
        {
          name: 'toronto-dominion',
          supported: false,
          soonsupport: false
        },
        {
          name: 'toronto-dominion bank',
          supported: false,
          soonsupport: false
        },
        {
          name: 'royal bank of scotland',
          supported: false,
          soonsupport: false
        },
        {
          name: 'regions financial',
          supported: false,
          soonsupport: false
        },
        {
          name: 'fifth third',
          supported: false,
          soonsupport: false
        },
        {
          name: 'ing group',
          supported: false,
          soonsupport: false
        },
        {
          name: 'ing',
          supported: false,
          soonsupport: false
        },
        {
          name: 'northern trust',
          supported: false,
          soonsupport: false
        },
        {
          name: 'bank of montreal',
          supported: false,
          soonsupport: false
        },
        {
          name: 'bnp paribas',
          supported: false,
          soonsupport: false
        },
        {
          name: 'e-trade',
          supported: false,
          soonsupport: false
        }
];