  <template> 
     <div> 
       <MyButton buttonClass="button" @click="handleButtonClick"> 
         Click  me! 
       </MyButton> 
     </div>
   
<div> 
<h1 class="text-primary">Hello, Vue.js with Bootstrap!</h1> 
<MyButton buttonClass="button1" @click="handleButtonClick"> 
         Click  here 
       </MyButton>  
</div> 
  
   </template> 
   <script>   
    import 'bootstrap/dist/css/bootstrap.css'; 
    import MyButton from './components/MyButton.vue'; 
   export default { 
     components: { 
       MyButton 
     }, 
     methods: { 
       handleButtonClick() { 
         alert('the button is clicked!!!!!!!! '); 
       } 
     } 
   } 
   
   
   </script> 
  <style> 
   
   button {
    background-color: black;
    color: beige;
    border: grey;
    padding: 10px;
    margin: 60px;
    border-radius: 09px;
  
   }
   body{
    text-align: center;
    background-color: pink;
    
    
   }

   </style>