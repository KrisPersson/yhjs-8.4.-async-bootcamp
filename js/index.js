

// Polka lover

function letsDance(danceStyle) {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if (danceStyle.toLowerCase() === 'polka') {
                resolve('Yes, polka is my thing!')
            } else {
                reject('Not even if a pandemic roamed the earth')
            }
        }, 2000);
        
    })
}

letsDance('Polka')
.then(resp => console.log(resp))
.catch(diss => console.log(diss))

// -----------------------------------------


// Webbprojektet


let stepIndex
const steps = [{
    step: 1,
    resolveMessage: 'Researchade målgruppen!',
    rejectMessage: "Målgruppen vill inte använda webben överhuvudtaget",
    timeInMS: 4000
},
{
    step: 2,
    resolveMessage: 'Skissade upp en design på papper!',
    rejectMessage: "Alla pennor är borta",
    timeInMS: 2000
},
{
    step: 3,
    resolveMessage: 'Gjorde skissen till en pixel perfect mockup i Figma - XD',
    rejectMessage: "Figma har gått i konkurs eller nåt",
    timeInMS: 3000
},
{
    step: 4,
    resolveMessage: 'Kodade!',
    rejectMessage: "Alla har glömt hur man kodar",
    timeInMS: 3000
},
{
    step: 5,
    resolveMessage: 'Stackoverflow:ade fel!',
    rejectMessage: "The stack overflowed beyond repair",
    timeInMS: 1000
},
{
    step: 6,
    resolveMessage: 'Testade produkten!',
    rejectMessage: "Test failed :(",
    timeInMS: 2000
},
{
    step: 7,
    resolveMessage: 'Partajade hela natten lång!',
    rejectMessage: "Systemet är stängt",
    timeInMS: 1000
},]

function runNextStep() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(steps[stepIndex].resolveMessage)
                stepIndex++
            } else {
                reject(steps[stepIndex].rejectMessage)
            }
        }, steps[stepIndex].timeInMS);
    })
}

function startProject() {
    stepIndex = 0
    runNextStep()
    .then(res => {
        console.log(res)
        runNextStep()
        .then(res => {
            console.log(res)
            runNextStep()
            .then(res => {
                console.log(res)
                runNextStep()
                .then(res => {
                    console.log(res)
                    runNextStep()
                    .then(res => {
                        console.log(res)
                        runNextStep()
                        .then(res => {
                            console.log(res)
                            runNextStep()
                            .then(res => {
                                console.log(res)                                
                            })
                        })
                    })
                })
            })
        })
    })
    .catch(fail => {
        console.log(fail)
    })
    
}

startProject()

// ---------------------------------------------------------

