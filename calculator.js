
  var check="start";
  var value1=0;
  var value2=0;
  var operator;

  
  // function mybtnValue(x){document.getElementById('calculatorScreen').value+=x;}

  function mybtnValue(x){
    if(this.check=="operator"){
      document.getElementById('calculatorScreen').value='';
      this.check="enter_value2"
    }
    if(this.check=="start"){
      document.getElementById('calculatorScreen').value+=x;
    }
    if(this.check=="enter_value2"){
      document.getElementById('calculatorScreen').value+=x;
      this.value2=Number(document.getElementById('calculatorScreen').value);
    }
  }


  function Plus(oper){
    this.operator=oper;
      this.check="operator";
      this.value1=Number(document.getElementById('calculatorScreen').value);
      document.getElementById('calculatorScreen').value=oper;
  }
  function Minous(oper){
    this.operator=oper;
      this.check="operator";
      this.value1=Number(document.getElementById('calculatorScreen').value);
      document.getElementById('calculatorScreen').value=oper;
  }
  function Multiply(oper){
    this.operator=oper;
      this.check="operator";
      this.value1=Number(document.getElementById('calculatorScreen').value);
      document.getElementById('calculatorScreen').value=oper;
  }
  function Divide(oper){
    this.operator=oper;
      this.check="operator";
      this.value1=Number(document.getElementById('calculatorScreen').value);
      document.getElementById('calculatorScreen').value=oper;
  }

  function result(){
      if(this.operator=='+'){
        let sum=0;
        sum=this.value1+this.value2;
        document.getElementById('calculatorScreen').value=sum;
      }else if(this.operator=='-'){
        let sum=0
        sum=this.value1-this.value2;
        document.getElementById('calculatorScreen').value=sum;
      }else if(this.operator=='*'){
        let sum=0;
        sum=this.value1*this.value2;
        document.getElementById('calculatorScreen').value=sum;
      }else{
        let sum=0;
        sum=this.value1/this.value2;
        document.getElementById('calculatorScreen').value=sum;
      }
      this.check="operator";
  }
  
  function clearAll(){
    document.getElementById('calculatorScreen').value='';
    this.value1=0;
    this.value2=0;
    this.operator='';
    this.check="start";
    clearMSG(false);
  }
