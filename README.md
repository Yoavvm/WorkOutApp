So i'm going to write this as if I am talking to myself since it's literally what i'm doing..

I want to design an app that can create and store custom workout and meal plans, a new plan can only be created by an admin and it can be viewed by the admin and the user the plan was made for.
an admin will have the possibility to copy a plan and store it as a new plan for a new user, creating a COPY of the old plan and adding it to the DB.

    workout plans will be divided into the following sections
    
        - type of workout
        - exercises
        - additional remarks
    


    eating plans will be divided into the following sections

        - meal schedule
        - types of food in the meal
        - maybe nutritional values


I also want to create a DB consisting of common foods and exercises so the admin will have the ability to select while creating a plan rather than create everything from scratch everytime.


    exercise DB -
        exercise name (examples are "pushup" or "pullup")
        relevant to what body part (examples are "upper arms" or "legs")
        link to a YT video showing the exercise

    food DB - 
        food name (examples are "eggs" or "cucumbers")    
        nutritional values (calories, protein..)
        ?amount per serving?
        
        
