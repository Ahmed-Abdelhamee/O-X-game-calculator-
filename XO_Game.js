var countX=0;
var X_choice;
var collect_Choices='';
var X_div;
var playerStatus;
var player;
var count_for_Win_MSG=0;
var errorHandler;
var compTurn;
var container='';
var x_inputs='';
var num=0;
var X_reload;
var previous_X1;
var previous_X2;
var O_Position1;
var O_Position2;


  function createX(x){
    this.countX++;
    // console.log(this.countX);
    if(this.countX<4 && x!=this.previous_X1 && x!=this.previous_X2 && this.get_X_choice_number(x)!=this.O_Position1 && this.get_X_choice_number(x)!=this.O_Position2 ){
      this.create_my_X(x);
      // setTimeout(this.computer_Turn,1000);
      this.computer_Turn(x);

      if(this.countX==1){
        this.previous_X1=x;
      }else if(this.countX==2){
        this.previous_X2=x;
      }

    }else{  
      this.countX--;
    }
  }



  function  create_my_X(x){
    if(x!=this.errorHandler&&x!=this.get_O_choice_from_random(this.O_Position1)&&x!=this.get_O_choice_from_random(this.O_Position2)){
      this.errorHandler=x;

//create X choice
      this.X_div =document.getElementById(x);
      this.X_choice=document.createElement('h1');
      this.X_choice.textContent="X" ;
          // console.log(this.X_choice);
      this.X_div.appendChild(this.X_choice);
      document.getElementById(x).style.color="black";
// get the result for player choices
      this.collect_Choices+=x;
      // console.log(this.count_Choices);
      this.count_for_Win_MSG++;
      this.player=document.querySelector('.PlayerStatus');
      this.playerStatus=document.createElement('h1');

      if(this.count_for_Win_MSG==3){
        if(this.get_X_choices(this.collect_Choices)){
            this.playerStatus.textContent="Exellent : You Win the game";
            this.player.appendChild(this.playerStatus);
            document.querySelector('h1').style.color="green";
        }else{
          this.playerStatus.textContent="Sorry : You lose the game";
          this.player.appendChild(this.playerStatus);
          document.querySelector('h1').style.color="red";
        }
      }else{};
    }else{
      this.countX--;
      // console.log(this.countX);
    }
  }
  

 
  function computer_Turn(x){
    if(x==this.X_reload){}
    else{
     this.x_inputs+=x;
    }
   console.log(this.x_inputs)
   if(this.num==0){
     let check_X_input=this.get_X_choice_number(x);
     let random=Math.floor(Math.random()*10);
     if(check_X_input==random || random==0){
       this.X_reload=x;
       this.computer_Turn(x);
     }else{
       let get_o_id=this.get_O_choice_from_random(random);
       console.log(random);
       this.create_computer_choice_O(get_o_id);
       this.num++;
       this.O_Position1=random;
     }
 
   }else if(this.num<3){
     
     let random= Math.floor(Math.random()*10);
 
     if(this.get_X_choice_number(this.x_inputs[0])==random||this.get_X_choice_number(this.x_inputs[1])==random||this.get_X_choice_number(this.x_inputs[2])==random || random==0 ||random==this.O_Position1||random==this.O_Position2){
       this.X_reload=x;
       this.computer_Turn(x);
     }
     else{
       let get_o_id=this.get_O_choice_from_random(random);
       console.log(random);
       this.create_computer_choice_O(get_o_id);
       this.num++;
       this.O_Position2=random;
     }
     
 
 
     // let check_X_input=this.O_Service.get_X_choice_number(x);
     // let random=Math.floor(Math.random()*10);
     // if(check_X_input==random ||random==0){
     //   this.computer_Turn(x);
     // }else{
     //   let get_o_id=this.O_Service.get_O_choice_from_random(random);
     //   console.log(random);
     //   this.create_computer_choice_O(get_o_id);
     //   this.num++;
     // }
 
   }else{}
   
    }
 
 
  function create_computer_choice_O(id){
   let DIV_O=document.getElementById(id);
   let O_text=document.createElement('h1');
   O_text.textContent='O';
   DIV_O.appendChild(O_text);
   
  }
 
  


  
  function get_X_choices(X_choice){
    switch(X_choice){
      case 'abc' :return true;
      break;
      case 'acd' :return true;
      break;
      case 'bac' :return true;
      break;
      case 'bca' :return true;
      break;
      case 'cba' :return true;
      break;
      case 'cab' :return true;
      break;

      case 'def' :return true;
      break;
      case 'dfe' :return true;
      break;
      case 'edf' :return true;
      break;
      case 'efd' :return true;
      break;
      case 'fed' :return true;
      break;
      case 'fde' :return true;
      break;

      case 'ghi' :return true;
      break;
      case 'gih' :return true;
      break;
      case 'hig' :return true;
      break;
      case 'hgi' :return true;
      break;
      case 'ihg' :return true;
      break;
      case 'igh' :return true;
      break;

      case 'adg' :return true;
      break;
      case 'agd' :return true;
      break;
      case 'dga' :return true;
      break;
      case 'dag' :return true;
      break;
      case 'gda' :return true;
      break;
      case 'gad' :return true;
      break;

      case 'beh' :return true;
      break;
      case 'bhe' :return true;
      break;
      case 'heb' :return true;
      break;
      case 'hbe' :return true;
      break;
      case 'ehb' :return true;
      break;
      case 'ebh' :return true;
      break;

      case 'cfi' :return true;
      break;
      case 'cif' :return true;
      break;
      case 'fic' :return true;
      break;
      case 'fci' :return true;
      break;
      case 'ifc' :return true;
      break;
      case 'icf' :return true;
      break;

      case 'aei' :return true;
      break;
      case 'aie' :return true;
      break;
      case 'eia' :return true;
      break;
      case 'eai' :return true;
      break;
      case 'iea' :return true;
      break;
      case 'iae' :return true;
      break;

      case 'ceg' :return true;
      break;
      case 'cge' :return true;
      break;
      case 'egc' :return true;
      break;
      case 'ecg' :return true;
      break;
      case 'gec' :return true;
      break;
      case 'gce' :return true;
      break;
      
      case '' :return true;
      break;
      case '' :return true;
      break;

      default :return false
    }
  }




  function get_X_choice_number(x){
    switch(x){
      case 'a' :return 1;
      break;
      case 'b' :return 2;
      break;
      case 'c' :return 3;
      break;
      case 'd' :return 4;
      break;
      case 'e' :return 5;
      break;
      case 'f' :return 6;
      break;
      case 'g' :return 7;
      break;
      case 'h' :return 8;
      break;
      case 'i' :return 9;
      break;

      default: "error";
    }
  }
  function get_O_choice_from_random(o){
    switch(o){
      case 1 :return 'a';
      break;
      case 2 :return 'b';
      break;
      case 3 :return 'c';
      break;
      case 4 :return 'd';
      break;
      case 5 :return 'e';
      break;
      case 6 :return 'f';
      break;
      case 7 :return 'g';
      break;
      case 8 :return 'h';
      break;
      case 9 :return 'i';
      break;

      default: "error";
    }
  }
