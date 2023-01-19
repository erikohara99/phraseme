import './App.css';
import Guesses from './components/Guesses';
import Input from './components/Input';
import React from 'react';

class App extends React.Component {
  state = {
    letters: [["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"],["-","-","-","-","-"], ["-","-","-","-","-"]],
    list: ["rough","steep","twist","juicy","yummy","haunt","empty","harsh","sense","admit","scarf","cakes","field","waste","eager","aback","agree","jaded","round","blink","cheer","month","peace","nutty","windy","title","paint","burst","decay","glass","whirl","messy","kaput","fancy","crawl","exist","puffy","angry","zippy","overt","silky","crate","occur","stone","skate","young","jumpy","first","cloth","smash","tacky","punch","bumpy","grade","rural","paper","alike","brief","scene","quick","elfin","chief","taboo","tasty","shelf","curly","tough","crazy","funny","match","cagey","drunk","prose","witty","queue","cross","kitty","allow","coast","spade","shave","groan","hands","daily","sheet","order","rapid","blade","birds","carve","teeth","death","thick","cheat","short","girls","flesh","tooth","reach","equal","route","quiet","smart","grape","stiff","price","touch","abaft","trees","knife","stare","watch","taste","testy","found","wheel","ready","label","tiger","giant","awful","shirt","rings","fruit","raise","screw","swing","shake","jazzy","stage","happy","frail","north","clear","tease","cough","elite","treat","dance","cream","raspy","crash","dress","flaky","party","lunch","shape","ultra","gaudy","broad","cause","linen","glove","madly","lying","wrist","royal","sleet","spare","whine","sulky","earth","ratty","solid","horse","rebel","plant","drown","spill","shaky","board","trail","heady","white","thing","thumb","great","hurry","chalk","truck","juice","sugar","berry","crook","reign","error","prick","learn","noisy","floor","phone","crowd","brass","snore","smile","press","dream","jelly","laugh","guard","slimy","relax","pause","dirty","sable","proud","milky","spoil","unite","nerve","dolls","bored","loose","plane","wreck","claim","bless","metal","pushy","flock","scary","grain","elbow","place","offer","ducks","tangy","chess","spray","stuff","tempt","snake","quack","hover","scare","rabid","sound","share","itchy","known","utter","soggy","fetch","macho","weigh","lumpy","drain","tired","pedal","robin","silly","voice","drink","kneel","x-ray","aloof","stove","books","steam","color","frogs","frame","sheep","three","honey","spoon","actor","obese","river","legal","march","class","light","green","curve","mixed","murky","group","ocean","limit","house","birth","close","crown","wrong","spicy","third","daffy","plate","uncle","jeans","giddy","strap","trust","level","women","range","clean","guess","roomy","brave","force","money","whole","naive","cover","amuse","doubt","train","jewel","count","sassy","weary","value","front","coach","wacky","gusty","geese","right","scold","waves","knock","crime","blind","strip","grass","point","godly","nasty","moldy","erect","swift","black","verse","faint","curvy","stale","reply","tramp","rifle","misty","brush","start","early","dizzy","ritzy","alive","furry","spark","lucky","tight","slave","alarm","brick","zebra","scale","trick","skirt","bawdy","plain","enter","steer","smoke","argue","ruddy","aware","queen","dusty","rainy","mourn","space","trite","sniff","quilt","jolly","shock","nifty","ghost","scrub","grate","greet","event","sharp","spiky","bathe","zesty","basin","rinse","handy","fresh","boast","crush","false","night","smell","choke","power","mouth","super","brake","wound","marry","float","trade","cruel","quill","blush","nippy","anger","shrug","story","slope","paste","large","pinch","blood","avoid","crack","awake","woman","minor","spell","badge","delay","small","cable","chase","lowly","bells","annoy","songs","water","heavy","store","cycle","shoes","thank","brown","faded","vague","sleep","needy","sweet","noise","irate","straw","carry","magic","angle","trace","shiny","acrid","stain","guide","shade","teeny","fence","husky","flash","upset","woozy","shame","fuzzy","humor","flame","cheap","nappy","steel","print","gabby","worry","check","tense","snail","scent","eight","amuck","visit","rigid","rhyme","enjoy","alert","tacit","foamy","brash","meaty","serve","ahead","stick","stamp","burly","flood","bikes","salty","mushy","goofy","judge","table","fixed"],
    word: "",
    count: 0,
    obtained: []
  }

  componentDidMount(){
    this.setState({word: this.state.list[Math.floor(Math.random() * this.state.list.length)].toUpperCase()});
    var obtained = this.state.obtained;
    for(var i = 0; i < 5; i++) obtained.push("_");
    this.setState({obtained});
}

  handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value.toUpperCase();
    var letters = this.state.letters;
    const word = this.state.word.toUpperCase();
    const count = this.state.count;
    var obtained = this.state.obtained;

    // do not accept input unless it's exactly the length of the word
    if(input.length !== word.length) return;

    // put the input into the state array
    for(let i = 0; i < word.length; i++) {
      letters[count][i] = input[i];

      // add letters to obtained letter array if correct
      if(input[i] === word[i]){
        obtained[i] = word[i];
        this.setState({obtained});
      } 
    }

    // tell DOM to update letters and count in browser
    this.setState({letters});
    this.setState({count: count+1});

    // check if user has won and display result if true
    if(word === input){
      document.getElementById("result").innerHTML = "You found the word.";
      document.getElementById("input").disabled = true;
    }

    // check if user has lost and display result if true
    else if(count === letters.length - 1){
      document.getElementById("result").innerHTML = "You did not find the word.";
      document.getElementById("input").disabled = true;

      var obtained = this.state.obtained;
      for(var i = 0; i < this.state.word.length; i++) {
        obtained[i] = this.state.word[i];
      }
      this.setState({obtained});
    }

    // otherwise, reset the text box for new input
    document.getElementById("input").value = "";
    return;
  }

  render() { 
    return(
      <div className="content">
        <h1>PhraseMe</h1>
        <div className="guesses">
          <Guesses letters={this.state.letters} word={this.state.word.toUpperCase()} count={this.state.count} obtained={this.state.obtained} />
        </div>
        <Input onSubmit={this.handleSubmit} word={this.state.word}/>
        <h1 id="result"></h1>
      </div>
    );
  }
}
 
export default App;
