(() => {
  class Person {
    get name() { return this._name; }
    set name(value) { 
      console.log(`[--2--]Setting name to ${value}`);
      this._name = value;
    }
    constructor(name) {
      this._name = name;
    }

    render() {
      console.log(`Hello Modern JS, my name is ${this._name}`);
    }
    /**
     * static refers to having this method added to the class 
     * itself as opposed to the individual object
     */
    static loadPeople() { 
      return [
        new Person('Person One'),
        new Person('Person Two')
      ]
    }
  }

  /**
   * to invoke the static function you have to access 
   * through the Object itself as per example
   */

  const [p1, p2] = Person.loadPeople();
  p1.render();
  p2.render();

  /**
   * if ```console.log(p1.loadPeople())``` it will give an error as 
   * loadPeople is not accessible on the class
   */

  const paul = new Person('[--1--]Paul');
  paul.render();

  paul.name = '[--3--]Alex';
  paul.render();

  /**
   * the problem here is that there is no accessibility
   * there is nothing stopping the access to a local variable
   * local variable: ``paul._name = 'lePaul'``` - TRY OUT
   */

   class Admin extends Person {
     constructor() {
       /**
        * by invoking the super() the prototype constructor will not be available anymore
        */
       super('I am an admin');
     }
     /**
      * when we extend we can overwrite methods
      */
     doAnAdminThing() { 
       // this method is only on the admin class
       console.log('Doing admin things');
     }
     /**
      * to replace a method completely from the Prototype 
      * object you only have to replace the specific method
      */
     render() {
       console.log(`Rendering an admin`);
       /**
        * to invoke the base class method we use the super();
        */
       super.render();
     }
   }

   const adminOne = new Admin('theBoss');
   adminOne.doAnAdminThing();
   // adminOne.render(); will work only if the extension 
   // class is not adding a new constructor() method
})();