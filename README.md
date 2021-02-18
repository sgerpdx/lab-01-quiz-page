# lab-01-quiz-page


### Outcomes:

1. Present user with clear information on topic.
2. Invite user to take a quiz.
3. Store and, as applicable, evaluate user answers to quiz.
4. Display a personalized message summarizing quiz performance.

### Process:

1. Format HTML including DOM elements:  
    - button to launch quiz  
    - a div at the bottom to display end-message  

2. In js:  
    - grab DOM elements and log to console  
    - create variable using let to store correct question answers (this happens inside event listener, later)  
    - create event listener for button click  
        - inside the event listener, create:  
            - an alert function to notify the user of the impending quiz  
            - a conf function to verify the user's intention to continue  
                - an answer defined as yes will allow user to proceed  
                - an answer defined otherwise will return out of event listener (and end quiz for user)  
            - three prompt functions presenting the user with question-strings  
                - an answer defined as yes will increment the value of the correct-answer variable  
                - an answer defined otherwise will simply proceed to the next prompt without incrementing the variable  
                - after the third question has been answered, the text content of the end-message div will be altered to display a message in the following format: "<em>first name</em> <em>last name</em>, you got <em>x</em> answers correct out of 3!" with 'x' being the end-value of the correct-answer variable  







Image to replace Alchemy logo: 
https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819-02.jpg/503px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819-02.jpg