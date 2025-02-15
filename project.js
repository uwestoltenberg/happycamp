function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('expanded');
}

document.querySelectorAll('.modal-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Close the modal after scrolling
        const modal = document.getElementById("infoModal");
        modal.style.display = "none"; // Hide the modal
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const svgObject = document.getElementById("interactive-map");

    svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;
        if (!svgDoc) {
            console.error("Failed to load SVG document.");
            return;
        }

        // Modal elements
        const modal = document.getElementById("infoModal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");
        const modalClose = document.querySelector(".modal-close");
        const modalLink = document.getElementById("modal-link");
        
        // Close modal on 'X' button click
        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal when clicking outside the modal content
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        // Information for each element
        const elementInfo = {
            yoga: {
                title: "Find Your Inner Balance",
                description: "A peaceful space for yoga, mindfulness, and administrative tasks. This building combines functionality with tranquility, offering the perfect environment to focus and recharge.",
                link: "#yoga-area" // Link to the corresponding section for the picture
            },
            callisthenic: {
                title: "Strength in Simplicity",
                description: "Callisthenics Area: A natural workout area with versatile equipment for bodyweight exercises. Perfect for building functional strength and flexibility.",
                link: "#calisthenics-area" // Link to the corresponding section for the picture
            },
            boxing: {
                title: "Unleash Your Strength",
                description: "Boxing and Fitness Area: A dynamic training area equipped for boxing and functional fitness. Designed for both physical and mental toughness, this space fosters energy and resilience.",
                link: "#boxing-area" // Link to the corresponding section for the picture
            },
            lake: {
                title: "Nature’s Tranquility",
                description: "A serene spot for relaxation and reflection. The lake brings a sense of calm and connection to nature.",
                link: "#lake-area" // Link to the corresponding section for the picture
            },
            sunset: {
                title: "Sip and Savor the View",
                description: "Sunset Coffee Bar: A cozy bar to enjoy your favorite drink while soaking in breathtaking sunsets. A perfect spot to relax after a fulfilling day.",
                link: "#sunsetcoffeebar-area" // Link to the corresponding section for the picture
            },
            cooking: {
                title: "Where Flavors and Friendships Come Together",
                description: "Cooking and Chill-Out Area: A communal area to prepare fresh, healthy meals and unwind. This is the heart of social interaction and relaxation at Happy Camp.",
                link: "#kitchen-area" // Link to the corresponding section for the picture
            },
            equipment: {
                title: "Storage for Success",
                description: "Equipment House:  A dedicated space to store all essential tools and equipment, ensuring everything is organized and accessible for your activities.",
                link: null // Link to the corresponding section for the picture
            },
            sauna: {
                title: "Sweat, Relax, Revive",
                description: "Sauna and Relaxation Area: A cozy sauna to detox, improve circulation, and promote recovery after a day of physical activity.",
                link: "#sauna-area" // Link to the corresponding section for the picture
            },
            bungalow1: {
                title: "Your Personal Retreat",
                description: "Bungalow 1: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            bungalow2: {
                title: "Your Personal Retreat",
                description: "Bungalow 2: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            bungalow3: {
                title: "Your Personal Retreat",
                description: "Bungalow 3: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            bungalow4: {
                title: "Your Personal Retreat",
                description: "Bungalow 4: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            bungalow5: {
                title: "Your Personal Retreat",
                description: "Bungalow 5: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            bungalow6: {
                title: "Your Personal Retreat",
                description: "Bungalow 6: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            bungalow7: {
                title: "Your Personal Retreat",
                description: "Bungalow 7: Cozy and private living spaces for participants, designed for relaxation and good sleep. A home away from home amidst nature.",
                link: "#bungalow-area" // Link to the corresponding section for the picture
            },
            road1: {
                title: "Ease of Access",
                description: "A pathway for vehicles on the top.",
                link: null // Link to the corresponding section for the picture
            },
            road2: {
                title: "Ease of Access",
                description: "A pathway for vehicles on the bottom.",
                link: null // Link to the corresponding section for the picture
            },
            heightline: {
                title: "Elevation Profile",
                description: "Explore the elevation profiles of our trails, with a maximum elevation of 46 meters. This terrain is perfectly suited for HIIT training, offering the ideal balance of challenge and accessibility.",
                link: null // Link to the corresponding section for the picture
            },
            hiit: {
                title: "HIIT and Endurance Path",
                description: "A challenging trail designed for high-intensity interval training (HIIT) and endurance workouts. Perfect for boosting fitness levels. Around 600m long.",
                link: null // Link to the corresponding section for the picture
            },
            hiitshort1: {
                title: "Quick but Intense",
                description: "As not everyoine is the same: A shorter version of the HIIT path, offering a quick, high-impact workout option for those on a tight schedule.Compact track designed for quick and intense workouts.",
                link: null // Link to the corresponding section for the picture
            },
            hiitshort2: {
                title: "Quick but Intense",
                description: "As not everyoine is the same: A shorter version of the HIIT path, offering a quick, high-impact workout option for those on a tight schedule.Compact track designed for quick and intense workouts.",
                link: null // Link to the corresponding section for the picture
            },
            hiitshort3: {
                title: "Quick but Intense",
                description: "As not everyoine is the same: A shorter version of the HIIT path, offering a quick, high-impact workout option for those on a tight schedule.Compact track designed for quick and intense workouts.",
                link: null // Link to the corresponding section for the picture
            }
        };

        // List of IDs for all interactive elements
        const elementsToHover = Object.keys(elementInfo);

        elementsToHover.forEach((id) => {
            const element = svgDoc.getElementById(id);
            if (element) {
                // Add hover effect
                element.addEventListener("mouseover", () => {
                    element.style.filter = "drop-shadow(0 0 15px blue)";
                });
                element.addEventListener("mouseout", () => {
                    element.style.filter = ""; // Reset the filter
                });
        
                // Add click event to show modal
                element.addEventListener("click", () => {
                    const info = elementInfo[id];
                    if (info) {
                        modalTitle.textContent = info.title;
                        modalDescription.textContent = info.description;
        
                        // Handle dynamic link
                        if (info.link) {
                            modalLink.href = info.link; // Dynamically set the link
                            modalLink.textContent = `See the Happy-Camp Vision`; // Update the link text
                            modalLink.style.display = "inline"; // Ensure the link is visible
                        } else {
                            modalLink.style.display = "none"; // Hide the link if no link is defined
                        }
        
                        modal.style.display = "block"; // Show the modal
                    } else {
                        console.warn(`No information available for element ID '${id}'`);
                    }
                });
            } else {
                console.warn(`Element with ID '${id}' not found in the SVG.`);
            }
        });
        
    svgObject.addEventListener("error", () => {
        console.error("Failed to load the SVG file.");
    });
});
});
