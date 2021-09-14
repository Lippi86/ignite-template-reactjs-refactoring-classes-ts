 //<reference types="react-scripts" />

 declare module "react/jsx-runtime" {
    export default any;
    }
   
    declare module "*.svg" {
       const content: any;
       export default content;
     }
   
     declare module "*.png" {
       const content: any;
       export default content;
     }