//setting a initial global variable
var bankInput = null;
//int chosen
$("#input_bank").chosen({no_results_text: "Oops, nothing found!", width: "40%", allow_single_deselect: true}); 
//function to listen for click event and enter key event
$("#bankSearch").click(function() {
  bankInput = document.getElementById('input_bank').value;
  bankQuery(bankInput);
});
$(".chosen-container").bind('keyup', function(e) {
    if (e.which === 13) {
      bankInput = document.getElementById('input_bank').value;
      bankQuery(bankInput);
    }
});
//function for looping through banks
function bankQuery(bankInput) {
  for (var i = 0; i < banksArray.length; i++) {
      console.log(bankInput, banksArray[i])
    if (bankInput.toLowerCase() === banksArray[i].name) {
      if (banksArray[i].supported == 1) {
        $(".alert").hide();
        $(".alert-success").fadeIn();
        return;
      } else if (banksArray[i].supported == 2) {
        $(".alert").hide();
        $(".alert-warning").fadeIn();
        return;
      } else if (banksArray[i].supported == 3) {
        $(".alert").hide();
        $(".alert-danger").fadeIn();
        return;
      };
    };
  };
};
//full list of banks
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
          name: '1st colonial community bank',
          supported: 2
        },
        {
          name: '1st community federal credit union',
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
          name: 'americas christian credit union',
          supported: 2
        },
        {
          name: 'americas credit union',
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
        {
          name: 'artisans bank',
          supported: 2
        },
        {
          name: 'arvest bank',
          supported: 2
        },
        {
          name: 'auburn bank',
          supported: 2
        },
        {
          name: 'avidbank',
          supported: 2
        },
        {
          name: 'bank of colorado',
          supported: 2
        },
        {
          name: 'bank of hawaii',
          supported: 2
        },
        {
          name: 'bank of idaho',
          supported: 2
        },
        {
          name: 'bankers trust company',
          supported: 2
        },
        {
          name: 'bankers trust company – cedar rapids',
          supported: 2
        },
        {
          name: 'bankiowa',
          supported: 2
        },
        {
          name: 'baton rouge telco federal credit union',
          supported: 2
        },
        {
          name: 'baxter credit union',
          supported: 2
        },
        {
          name: 'bay atlantic federal credit union',
          supported: 2
        },
        {
          name: 'bcm federal credit union',
          supported: 2
        },
        {
          name: 'bellco credit union',
          supported: 2
        },
        {
          name: 'bellwether community credit union',
          supported: 2
        },
        {
          name: 'belmont bank & trust',
          supported: 2
        },
        {
          name: 'black hills federal credit union',
          supported: 2
        },
        {
          name: 'blackhawk community credit union',
          supported: 2
        },
        {
          name: 'bmi federal credit union',
          supported: 2
        },
        {
          name: 'boeing employee credit union',
          supported: 2
        },
        {
          name: 'bofi federal bank',
          supported: 2
        },
        {
          name: 'boulder dam credit union',
          supported: 2
        },
        {
          name: 'branch banking and trust company',
          supported: 2
        },
        {
          name: 'brazos valley schools credit union',
          supported: 2
        },
        {
          name: 'brown county state bank',
          supported: 2
        },
        {
          name: 'california bank & trust',
          supported: 2
        },
        {
          name: 'cambridge trust company',
          supported: 2
        },
        {
          name: 'camden national bank',
          supported: 2
        },
        {
          name: 'campus usa credit union',
          supported: 2
        },
        {
          name: 'capital city bank',
          supported: 2
        },
        {
          name: 'capitol credit union',
          supported: 2
        },
        {
          name: 'capitol federal savings bank',
          supported: 2
        },
        {
          name: 'cardinal bank',
          supported: 2
        },
        {
          name: 'cardinal community credit union',
          supported: 2
        },
        {
          name: 'cascade federal credit union',
          supported: 2
        },
        {
          name: 'centra credit union',
          supported: 2
        },
        {
          name: 'central florida educators federal credit union',
          supported: 2
        },
        {
          name: 'central keystone federal credit union',
          supported: 2
        },
        {
          name: 'central valley community bank',
          supported: 2
        },
        {
          name: 'changing seasons fcu',
          supported: 2
        },
        {
          name: 'charter oak federal credit union',
          supported: 2
        },
        {
          name: 'cheektowaga community federal credit union',
          supported: 2
        },
        {
          name: 'chevron federal credit union',
          supported: 2
        },
        {
          name: 'chippewa county credit union',
          supported: 2
        },
        {
          name: 'christian community credit union',
          supported: 2
        },
        {
          name: 'citizens and farmers bank',
          supported: 2
        },
        {
          name: 'city national bank',
          supported: 2
        },
        {
          name: 'city national bank of new jersey',
          supported: 2
        },
        {
          name: 'clearview federal credit union',
          supported: 2
        },
        {
          name: 'cme federal credit union',
          supported: 2
        },
        {
          name: 'coast central credit union',
          supported: 2
        },
        {
          name: 'coastal federal credit union',
          supported: 2
        },
        {
          name: 'coastalstates bank',
          supported: 2
        },
        {
          name: 'coasthills credit union',
          supported: 2
        },
        {
          name: 'coastline federal credit union',
          supported: 2
        },
        {
          name: 'columbia bank',
          supported: 2
        },
        {
          name: 'columbine federal credit union',
          supported: 2
        },
        {
          name: 'comenity bank',
          supported: 2
        },
        {
          name: 'comenity capital bank',
          supported: 2
        },
        {
          name: 'commerce bank',
          supported: 2
        },
        {
          name: 'commonwealth credit union',
          supported: 2
        },
        {
          name: 'commonwealth one federal credit union',
          supported: 2
        },
        {
          name: 'community & southern bank',
          supported: 2
        },
        {
          name: 'community america credit union',
          supported: 2
        },
        {
          name: 'community bank of pleasant hill',
          supported: 2
        },
        {
          name: 'community bank of raymore',
          supported: 2
        },
        {
          name: 'community choice credit union',
          supported: 2
        },
        {
          name: 'community credit union of florida',
          supported: 2
        },
        {
          name: 'community first credit union',
          supported: 2
        },
        {
          name: 'community first credit union of florida',
          supported: 2
        },
        {
          name: 'compass bank',
          supported: 2
        },
        {
          name: 'connex credit union',
          supported: 2
        },
        {
          name: 'conservation employees credit union',
          supported: 2
        },
        {
          name: 'consumers credit union – illionois',
          supported: 2
        },
        {
          name: 'coulee dam federal credit union',
          supported: 2
        },
        {
          name: 'county educators federal credit union',
          supported: 2
        },
        {
          name: 'covantage credit union',
          supported: 2
        },
        {
          name: 'cpm federal credit union',
          supported: 2
        },
        {
          name: 'cross keys bank',
          supported: 2
        },
        {
          name: 'ctecu',
          supported: 2
        },
        {
          name: 'customers bank',
          supported: 2
        },
        {
          name: 'cyprus federal credit union',
          supported: 2
        },
        {
          name: 'deer valley credit union',
          supported: 2
        },
        {
          name: 'del-one federal credit union',
          supported: 2
        },
        {
          name: 'denver community credit union',
          supported: 2
        },
        {
          name: 'denver fire department federal credit union',
          supported: 2
        },
        {
          name: 'desert first federal credit union',
          supported: 2
        },
        {
          name: 'dfcu financial',
          supported: 2
        },
        {
          name: 'diablo valley federal credit union',
          supported: 2
        },
        {
          name: 'digital federal credit union',
          supported: 2
        },
        {
          name: 'directions credit union',
          supported: 2
        },
        {
          name: 'dort federal credit union',
          supported: 2
        },
        {
          name: 'dupaco community credit union',
          supported: 3
        },
        {
          name: 'dupage credit union',
          supported: 3
        },
        {
          name: 'dupont community credit union',
          supported: 3
        },
        {
          name: 'dutch point credit union',
          supported: 3
        },
        {
          name: 'e federal credit union',
          supported: 3
        },
        {
          name: 'east river federal credit union',
          supported: 3
        },
        {
          name: 'east texas professional credit union',
          supported: 3
        },
        {
          name: 'east wisconsin savings bank',
          supported: 3
        },
        {
          name: 'eastman credit union',
          supported: 3
        },
        {
          name: 'educators credit union',
          supported: 3
        },
        {
          name: 'eli lilly federal credit union',
          supported: 3
        },
        {
          name: 'employees credit union',
          supported: 3
        },
        {
          name: 'esl federal credit union',
          supported: 3
        },
        {
          name: 'evansville federal credit union',
          supported: 3
        },
        {
          name: 'evansville teachers federal credit union',
          supported: 3
        },
        {
          name: 'evergreen credit union',
          supported: 3
        },
        {
          name: 'f&a federal credit union',
          supported: 3
        },
        {
          name: 'fairfax county federal credit union',
          supported: 3
        },
        {
          name: 'farm bureau bank',
          supported: 3
        },
        {
          name: 'farmers bank',
          supported: 3
        },
        {
          name: 'fidelity deposit & discount bank',
          supported: 3
        },
        {
          name: 'financial plus credit union',
          supported: 3
        },
        {
          name: 'financial plus credit union',
          supported: 3
        },
        {
          name: 'first atlantic federal credit union',
          supported: 3
        },
        {
          name: 'first bank and trust company',
          supported: 3
        },
        {
          name: 'first bank of dalton',
          supported: 3
        },
        {
          name: 'first citizens’ federal credit union',
          supported: 3
        },
        {
          name: 'first class american credit union',
          supported: 3
        },
        {
          name: 'first community credit union',
          supported: 3
        },
        {
          name: 'first credit union',
          supported: 3
        },
        {
          name: 'first entertainment credit union',
          supported: 3
        },
        {
          name: 'first federal savings bank',
          supported: 3
        },
        {
          name: 'first fidelity bank n.a.',
          supported: 3
        },
        {
          name: 'first financial bank na cincinnati',
          supported: 3
        },
        {
          name: 'first financial credit union (ca)',
          supported: 3
        },
        {
          name: 'first financial credit union (il)',
          supported: 3
        },
        {
          name: 'first florida credit union',
          supported: 3
        },
        {
          name: 'first international bank and trust',
          supported: 3
        },
        {
          name: 'first national bank',
          supported: 3
        },
        {
          name: 'first national bank of bosque county',
          supported: 3
        },
        {
          name: 'first national bank of omaha',
          supported: 3
        },
        {
          name: 'first national bank of pontotoc',
          supported: 3
        },
        {
          name: 'first national bank-arcadia la',
          supported: 3
        },
        {
          name: 'first northern credit union',
          supported: 3
        },
        {
          name: 'first technology federal credit union',
          supported: 3
        },
        {
          name: 'first tennessee bank national association',
          supported: 3
        },
        {
          name: 'first utah bank',
          supported: 3
        },
        {
          name: 'firstbank',
          supported: 3
        },
        {
          name: 'fnb community bank',
          supported: 3
        },
        {
          name: 'fort worth city credit union',
          supported: 3
        },
        {
          name: 'fort worth community credit union',
          supported: 3
        },
        {
          name: 'founders federal credit union',
          supported: 3
        },
        {
          name: 'freedom first credit union',
          supported: 3
        },
        {
          name: 'fremont bank',
          supported: 3
        },
        {
          name: 'frost bank',
          supported: 3
        },
        {
          name: 'ge credit union',
          supported: 3
        },
        {
          name: 'generations community federal credit union',
          supported: 3
        },
        {
          name: 'golden plains credit union',
          supported: 3
        },
        {
          name: 'goldenwest federal credit union',
          supported: 3
        },
        {
          name: 'great basin fcu',
          supported: 3
        },
        {
          name: 'greater iowa credit union',
          supported: 3
        },
        {
          name: 'greater nevada credit union',
          supported: 3
        },
        {
          name: 'gte federal credit union',
          supported: 3
        },
        {
          name: 'guaranty bank & trust company',
          supported: 3
        },
        {
          name: 'guaranty bank & trust, n.a.',
          supported: 3
        },
        {
          name: 'gulf coast bank and trust company',
          supported: 3
        },
        {
          name: 'gulf coast educators federal credit union',
          supported: 3
        },
        {
          name: 'gulf winds federal credit union',
          supported: 3
        },
        {
          name: 'hartford healthcare federal credit union',
          supported: 3
        },
        {
          name: 'hawaii county employees federal credit union',
          supported: 3
        },
        {
          name: 'hawaii state federal credit union',
          supported: 3
        },
        {
          name: 'healthcare systems federal credit union',
          supported: 3
        },
        {
          name: 'heartland federal credit union',
          supported: 3
        },
        {
          name: 'heinz-del monte federal credit union',
          supported: 3
        },
        {
          name: 'henrico federal credit union',
          supported: 3
        },
        {
          name: 'heritage community credit union',
          supported: 3
        },
        {
          name: 'heritage grove federal credit union',
          supported: 3
        },
        {
          name: 'highmark federal credit union',
          supported: 3
        },
        {
          name: 'hiway federal credit union',
          supported: 3
        },
        {
          name: 'honda federal credit union',
          supported: 3
        },
        {
          name: 'houston texas fire fighters federal credit union',
          supported: 3
        },
        {
          name: 'hudson river community credit union',
          supported: 3
        },
        {
          name: 'hudson valley federal credit union',
          supported: 3
        },
        {
          name: 'hughes federal credit union',
          supported: 3
        },
        {
          name: 'huntington federal savings bank',
          supported: 3
        },
        {
          name: 'iberiabank',
          supported: 3
        },
        {
          name: 'idaho central credit union',
          supported: 3
        },
        {
          name: 'illiana financial credit union',
          supported: 3
        },
        {
          name: 'illinois national bank',
          supported: 3
        },
        {
          name: 'illinois state police federal credit union',
          supported: 3
        },
        {
          name: 'innovations federal credit union',
          supported: 3
        },
        {
          name: 'inova federal credit union',
          supported: 3
        },
        {
          name: 'iq credit union',
          supported: 3
        },
        {
          name: 'jax federal credit union',
          supported: 3
        },
        {
          name: 'johns hopkins federal credit union',
          supported: 3
        },
        {
          name: 'justice federal credit union',
          supported: 3
        },
        {
          name: 'kane county teachers credit union',
          supported: 3
        },
        {
          name: 'keesler federal credit union',
          supported: 3
        },
        {
          name: 'kemba credit union',
          supported: 3
        },
        {
          name: 'kent credit union',
          supported: 3
        },
        {
          name: 'key point credit union',
          supported: 3
        },
        {
          name: 'kinetic credit union',
          supported: 3
        },
        {
          name: 'kirtland federal credit union',
          supported: 3
        },
        {
          name: 'la terre federal credit union',
          supported: 3
        },
        {
          name: 'lake michigan credit union',
          supported: 3
        },
        {
          name: 'lake sunapee bank',
          supported: 3
        },
        {
          name: 'landmark credit union',
          supported: 3
        },
        {
          name: 'langley federal credit union',
          supported: 3
        },
        {
          name: 'laramie plains community federal credit union',
          supported: 3
        },
        {
          name: 'legend bank na',
          supported: 3
        },
        {
          name: 'liberty savings bank, f.s.b.',
          supported: 3
        },
        {
          name: 'library of congress federal credit union',
          supported: 3
        },
        {
          name: 'listerhill credit union',
          supported: 3
        },
        {
          name: 'lone star state bank of west texas',
          supported: 3
        },
        {
          name: 'los angeles federal credit union',
          supported: 3
        },
        {
          name: 'luther burbank savings',
          supported: 3
        },
        {
          name: 'm&t bank',
          supported: 3
        },
        {
          name: 'marine bank & trust',
          supported: 3
        },
        {
          name: 'marion & polk schools credit union',
          supported: 3
        },
        {
          name: 'massmutual federal credit union',
          supported: 3
        },
        {
          name: 'mcgraw-hill federal credit union',
          supported: 3
        },
        {
          name: 'mchenry county federal credit union',
          supported: 3
        },
        {
          name: 'meadows bank',
          supported: 3
        },
        {
          name: 'meadows credit union',
          supported: 3
        },
        {
          name: 'mendo lake credit union',
          supported: 3
        },
        {
          name: 'mercantile bank',
          supported: 3
        },
        {
          name: 'mercantile bank of michigan',
          supported: 3
        },
        {
          name: 'merck employees federal credit union',
          supported: 3
        },
        {
          name: 'merco credit union',
          supported: 3
        },
        {
          name: 'meridian trust federal credit union',
          supported: 3
        },
        {
          name: 'merrimack valley credit union',
          supported: 3
        },
        {
          name: 'michigan state university federal credit union',
          supported: 3
        },
        {
          name: 'michigan tech employees federal credit union',
          supported: 3
        },
        {
          name: 'midfirst bank',
          supported: 3
        },
        {
          name: 'midflorida credit union',
          supported: 3
        },
        {
          name: 'mid-hudson valley federal credit union',
          supported: 3
        },
        {
          name: 'midstate federal credit union',
          supported: 3
        },
        {
          name: 'mississippi national guard federal credit union',
          supported: 3
        },
        {
          name: 'mississippi telco federal credit union',
          supported: 3
        },
        {
          name: 'missoula federal credit union',
          supported: 3
        },
        {
          name: 'missouri bank',
          supported: 3
        },
        {
          name: 'montgomery county federal credit union',
          supported: 3
        },
        {
          name: 'mountain america credit union',
          supported: 3
        },
        {
          name: 'mountain credit union',
          supported: 3
        },
        {
          name: 'mountain valley bank',
          supported: 3
        },
        {
          name: 'municipal credit union',
          supported: 3
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