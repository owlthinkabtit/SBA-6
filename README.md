# SBA-6: TypeScript and Advanced JavaScript
**Author:** Jameka Haggins 

In this assessment, you will apply the skills you’ve developed throughout the TypeScript and Advanced JavaScript module to build a functional, real-world application. 
---
## Reflection
1. How you implemented TypeScript features and OOP principles.
2. The challenges you encountered and how you overcame them.
3. How you handled asynchronous operations and error management.
---
I used an interface called ProductData. This acts as a checklist that tells the computer exactly what fields (like id, title, and price) a product must have. This prevents you from accidentally using a field that doesn't exist. I used a Class for  Product. This is a blueprint that combines data (like the price) with actions (like the displayDetails() method). By doing this, I made the code modular, meaning each piece of the app has a specific job.

One specific challenge was dealing with Type Safety. For example, when trying to grab the first item from the API list, TypeScript warned that the item might be undefined (empty), after much trail and error and research, I learned that using the non-null assertion operator (!). This told TypeScript that you were confident the API would return data. I learned that errors in typescript can be frustrating, but honestly it's helping to not have my project crash and burn.

Using async and await in the apiService. Since the computer is much faster than the internet, await tells the code to "pause and wait for the delivery" (thanks Quinn for analogies) from the API before trying to use the data. This ensures the app doesn't try to display a product that hasn't arrived yet. Same could be said for the error catching with try/catch. Overral this was a great learning experience, but I'm done with typescript for the next 84 years!
