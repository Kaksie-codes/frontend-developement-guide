In CSS, both transitions and animations help create movement or visual changes, 
but they work differently and are used for different scenarios. 
Here’s a beginner-friendly breakdown:

1.) Transitions
    Transitions allow you to make a CSS property smoothly change 
    from one value to another over a specific duration 
    when a specific event (like a hover) happens.


    Key Elements:
    *)  Starting state and ending state: 
        You define both in CSS. For example, a button might change from blue to red.
    *)  Duration: 
        You specify how long the transition takes (e.g., 0.5s).
    *)  Trigger: Transitions only happen in response to user actions or state changes, 
        like hovering, clicking, or focusing.
    *) Limitations: Transitions need a trigger (like hover or click) and only go from one state to another. 
        They can't loop or repeat on their own.


2.) Animations
    Animations let you create more complex effects, with control over multiple stages (or “keyframes”) and the ability to loop or repeat indefinitely. Animations run independently without needing an external trigger.


    Key Elements:
    *) Keyframes: 
        You define stages of the animation with @keyframes, 
        specifying how properties should look at each stage.
    *) Duration and Delay: 
        You set the duration for the entire animation and can delay the start if needed.
    *) Looping: 
        You can control how many times the animation runs or set it to loop forever.