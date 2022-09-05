Here is my code for the given task for this vacancy
https://saleswhale.notion.site/Frontend-Engineer-Junior-University-Grad-Saleswhale-Takehome-Assignment-900a1cb8b51c4826ac2bc2c9939dc787

I tried to maintain ui on a maxium level and I think it is apixel perfect deploy of the figma design.
As you asked this site has filtered power to filter team based on three state, All, Favourited, Archived.
I also added input filtering so if you search team name on the right input avobe team section you can view the result based on the search.

Now how the filtering work.Basically I make a context to hold all the data and it easier to manage to operations on different components.
Then I make four functions which is filterAll,fillterFavourite,filterArchived,filterInput and this functions get called on when you hit 
the buttons. The filterInput functions gets called when you search team name.You can easily understand application process if you look at the ./src/test-project/context/context.tsx file.
Finally I used typescript as I am working with this nowadays and I can convert it in js easily.

here is live demo
https://6sense-test-project.vercel.app/

Thank You