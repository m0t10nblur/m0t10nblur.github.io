
function updateOutput() { 
		//leech
	var form = document.getElementById("leechcalc");
	var drain = form.elements["drain"];
	var stacks = form.elements["stacks"];
	var flowcaps = parseInt(form.elements["flowcaps"].value);

drain.value = (1 + (flowcaps * .01)).toFixed(2);
stacks.value = drain.value * 8;

//overcap
	var form = document.getElementById("overcap");
	var out3 = form.elements["hardcap"];
	var out4 = form.elements["totalpower"];
//	var out2 = form.elements["stacks"];
	var ptr = parseFloat(form.elements["powerrate"].value);

out3.value = (parseFloat( (ptr * 4))).toFixed(2);
out3.value = parseFloat( (ptr * 4));
out4.value = parseFloat(out3.value) + 125;

//reputation


var form = document.getElementById("reputation");
		//get output
	var out5 = form.elements["20hrs"];
	var out6 = form.elements["20hrsmarks"];
	var out7 = form.elements["1hrs"];
	var out8 = form.elements["1hrsmarks"];
	var out9 = form.elements["remainingrep"];
	var T5 = 100000;
	
		//get two numbers
	var currep = parseInt(form.elements["currentrep"].value);
	//var num2 = parseInt(form.elements["y"].value);
		//get operator
	var repstanding = parseInt(form.elements["standing"].value);
		//set output depending on operator
switch(repstanding)
	{
		case 2500: out7.value = ( (T5 - currep) / 200)
													out8.value = (((T5 - currep) / 200) * 30);
	  	break;
		case 5000: out7.value = ( (T5 - currep) / 400)
													out8.value = (((T5 - currep) / 400) * 30);
		break;
			default: out7.value = ( (T5 - currep) / 200);
	  	break;
	}


out9.value = T5 - currep;
out5.value = ( (T5 - currep) / repstanding);
out6.value = (( (T5 - currep) / repstanding) * 30) ;
//out7.value = ( (T5 - currep) / repstanding);
//out8.value = (( (T5 - currep) / repstanding) * 30) ;

//out7.value = standing;


		//Warp Core Efficiency
	var form = document.getElementById("efficiencycalc");
	var wce = parseFloat(form.elements["warpcoreefficiency"].value);
	var systempowersetting = parseFloat(form.elements["systempowersetting"].value);
	var systembonuspower = form.elements["systembonuspower"];


systembonuspower.value = ((wce/533.333)*(75-systempowersetting)).toFixed(3);

//Subsystem Power Bonus = ( Skill Level / 533.3333... ) * ( 75 - Current Subsystem Power Setting )


		//Starship Engine Performance
	var form = document.getElementById("SEP");
	var sepr = parseInt(form.elements["SEPR"].value);
	var eplg = form.elements["EPLG"];

eplg.value = (sepr/10).toFixed(2);

		//Starship Warp Core Potential
	var form = document.getElementById("WCP");
	var wcpr = parseInt(form.elements["WCPR"].value);
	var wcpg = form.elements["WCPG"];

wcpg.value = (wcpr/20).toFixed(2);

		//Starship Electro-Plasma System
	var form = document.getElementById("SEPS");
	var sepsr = parseInt(form.elements["SEPSR"].value);
	var tbps = form.elements["TBPS"];
	var transtot = form.elements["TransTotal"];

tbps.value = (sepsr/20);
transtot.value = ((sepsr/20) + 5);

		//Starship Shield Damage Resist
	var form = document.getElementById("SDR");
	var shieldpower = parseInt(form.elements["ShieldPower"].value);
	var shielddr = form.elements["ShieldDR"];

shielddr.value = parseInt(((shieldpower/357.12)*100));



		//Nukara Auxilary Power Configuration
	var form = document.getElementById("napc");
	var auxpower = parseInt(form.elements["SAPL"].value);
	var nukacc = form.elements["nukacc"];
	var nukdmg = form.elements["nukdmg"];
	var nukhull = form.elements["nukhull"];
	var nukshield = form.elements["nukshield"];
	var nukdr = form.elements["nukdr"];

shielddr.value = parseInt(((shieldpower/357.12)*100));

nukacc.value = (auxpower * .05).toFixed(2);
nukdmg.value = nukacc.value;
nukhull.value = nukacc.value;
nukshield.value = nukacc.value;
nukdr.value = (auxpower * .20).toFixed(2);

//Sector Space Speed
	var form = document.getElementById("SectorSpeed");
	var sdcr = parseInt(form.elements["SDCR"].value);
	var ssds = parseInt(form.elements["SSDS"].value);	
	var trans = form.elements["Trans"];
	var dipimmune = form.elements["DipImmune"];
	var raidparty = form.elements["RaidParty"];
	var maco = form.elements["MACO"];
	var acld = form.elements["ACLD"];
	


if (dipimmune.checked) {
		dipimmuneNum = form.elements["DipImmune"].value;
} else {
		dipimmuneNum = 0;
}

if (raidparty.checked) {
		raidpartyNum = form.elements["RaidParty"].value;
} else {
		raidpartyNum = 0;
}

if (maco.checked) {
		macoNum = form.elements["MACO"].value;
} else {
		macoNum = 0;
}

if (acld.checked) {
		acldNum = form.elements["ACLD"].value;
} else {
		acldNum = 0;
}

//trans.value = parseInt(dipimmuneNum) + parseInt(raidpartyNum);

trans.value = ((100 + ((sdcr + parseInt(dipimmuneNum) + parseInt(raidpartyNum) + parseFloat(macoNum) + parseInt(acldNum))/2)) * (ssds/100)).toFixed(2);

//trans.value = ((100 + ((sdcr + dipimmuneNum + raidpartyNum)/2)) * (ssds/100));







}