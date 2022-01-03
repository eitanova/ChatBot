# ChatBot
ChatBot for website's

Features:
  1. Reading questions & answers from JSON file
  2. Animated open & close chat bot window

JSON struct:
  A. Attributes:
    1. **question** - Text that contains information before the options 
    2. **answer** - User's options in array format (i.e = "answer" : [ "option A", "option B" ])
    3. **children** - The next question & answer. shows the children's question by the user previous option index (explained later)
         children object exmaple = "children" : [
        { 
          "question" : "You chose option A",
          "answer" : "Option C"
        },
        { 
          "question" : "You chose option B",
          "answer" : "Option D" 
        }
      ]
    
  B. Implementation:
  The basic implementaion of the JSON file with chatbot option is using the question attribute to write the question (or another text that will show at 
  the head of the block), and answer to show the user his options.
  
  If you wish to implement a decision tree, you will need to cordinate your answer index with the necessary children object.
  For example: 
  At first, the user have two answers: A / B
  if the user choose's A, then the next question & answer that the user will see is the children question & answer at index 0
  If the user choose's B, then he will see children object at index 1 and so on...
  
  
