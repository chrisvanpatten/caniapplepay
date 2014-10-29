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
      console.log(bankInput, banksArray[i])
    if (bankInput.toLowerCase() === banksArray[i].name) {
      if (banksArray[i].supported == 1) {
        $(".alert").hide();
        $(".alert-success").fadeIn();
        // $('body').toggleClass('clicked1');
        // $('.container-fluid').toggleClass('clicked1');
        // $('html').toggleClass('clicked1');
        return;
      } else if (banksArray[i].supported == 2) {
        $(".alert").hide();
        $(".alert-warning").fadeIn();
        // $('body').toggleClass('clicked2');
        // $('.container-fluid').toggleClass('clicked2');
        // $('html').toggleClass('clicked2');
        return;
      } else if (banksArray[i].supported == 3) {
        $(".alert").hide();
        $(".alert-danger").fadeIn();
        // $('body').toggleClass('clicked3');
        // $('.container-fluid').toggleClass('clicked3');
        // $('html').toggleClass('clicked3');
        return;
      };
    };
  };
};

var banksArray = [
        {
          name: 'american express',
          supported: 1
        },
        {
          name: 'first colonial community bank',
          supported: 2
        },
        {
          name: 'first community federal credit union',
          supported: 2
        },
        {
          name: 'a+ federal credit union',
          supported: 2
        },
        {
          name: 'actors federal credit union',
          supported: 2
        },
        {
          name: 'advantage federal credit union',
          supported: 2
        },
        {
          name: 'affinity federal credit union',
          supported: 2
        },
        {
          name: 'affinity plus federal credit union',
          supported: 2
        },
        {
          name: 'alaska usa federal credit union',
          supported: 2
        },
        {
          name: 'alliant credit union',
          supported: 2
        },
        {
          name: 'alps federal credit union',
          supported: 2
        },
        {
          name: 'alternatives federal credit union',
          supported: 2
        },
        {
          name: 'altra federal credit union',
          supported: 2
        },
        {
          name: 'amarillo national bank',
          supported: 2
        },
        {
          name: 'amegy bank national association',
          supported: 2
        },
        {
          name: 'america first credit union',
          supported: 2
        },
        {
          name: 'american airlines federal credit union',
          supported: 2
        },
        {
          name: 'american chartered bank',
          supported: 2
        },
        {
          name: 'american heritage bank',
          supported: 2
        },
        {
          name: 'american savings bank',
          supported: 2
        },
        {
          name: 'america’s christian credit union',
          supported: 2
        },
        {
          name: 'america’s credit union',
          supported: 2
        },
        {
          name: 'americu credit union',
          supported: 2
        },
        {
          name: 'andrews federal credit union',
          supported: 2
        },
        {
          name: 'apco employees credit union',
          supported: 2
        },
        {
          name: 'arlington community federal credit union',
          supported: 2
        },
        { //stopped
          name: 'artisans bank',
          supported: 2
        },
        {
          name: 'absa',
          supported: 3
        },
        {
          name: 'ally bank',
          supported: 3
        },
        {
          name: 'bank of america', 
          supported: 1
        },
        {
          name: 'barclaycard', 
          supported: 1
        },
        {
          name: 'citi',
          supported: 1
        },
        {
          name: 'citibank',
          supported: 1
        },
        {
          name: 'chase',
          supported: 1
        },
        {
          name: 'capital one',
          supported: 1
        },
        {
          name: 'j.p. morgan',
          supported: 1
        },
        {
          name: 'jp morgan',
          supported: 1
        },
        {
          name: 'merrill lynch',
          supported: 1
        },
        {
          name: 'navy federal credit union',
          supported: 1
        },
        {
          name: 'u.s. trust',
          supported: 1
        },
        {
          name: 'us trust',
          supported: 1
        },
        {
          name: 'wells fargo',
          supported: 1
        },
        {
          name: 'ncsecu',
          supported: 2
        },
        {
          name: 'nc state employees credit union',
          supported: 2
        },
        {
          name: 'pnc',
          supported: 2
        },
        {
          name: 'hsbc',
          supported: 3
        },
        {
          name: 'bank of new york mellon',
          supported: 3
        },
        {
          name: 'us bancorp',
          supported: 2
        },
        {
          name: 'u.s. bancorp',
          supported: 2
        },
        {
          name: 'suntrust',
          supported: 2
        },
        {
          name: 'state street corp',
          supported: 3
        },
        {
          name: 'state street',
          supported: 3
        },
        {
          name: 'huntington bank',
          supported: 2
        },
        {
          name: 'usaa',
          supported: 2
        },
        {
          name: 'bbt',
          supported: 2
        },
        {
          name: 'bb&t',
          supported: 2
        },
        {
          name: 'toronto-dominion',
          supported: 2
        },
        {
          name: 'toronto-dominion bank',
          supported: 2
        },
        {
          name: 'royal bank of scotland',
          supported: 3
        },
        {
          name: 'regions financial',
          supported: 2
        },
        {
          name: 'fifth third',
          supported: 2
        },
        {
          name: 'keybank',
          supported: 2
        },
        {
          name: 'ing group',
          supported: 3
        },
        {
          name: 'ing',
          supported: 3
        },
        {
          name: 'northern trust',
          supported: 3
        },
        {
          name: 'bank of montreal',
          supported: 2
        },
        {
          name: 'bnp paribas',
          supported: 3
        },
        {
          name: 'e-trade',
          supported: 3
        }
];