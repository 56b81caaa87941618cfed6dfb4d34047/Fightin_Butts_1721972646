/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1721972647", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Brutal Battles-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out" :class="[textStylePrimary, hoverTextStylePrimary]" href="Brutal Battles.html">Brutal Battles</a></li>
                        <li><a id="Smash and Trash-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out" href="Smash and Trash.html" :class="[textStylePrimary, hoverTextStylePrimary]">Smash and Trash</a></li>
                        <li><a id="Ashtray Arenas-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out" href="Ashtray Arenas.html" :class="[textStylePrimary, hoverTextStylePrimary]">Ashtray Arenas</a></li>
                        <li><a id="Smokin' Showdowns-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out" href="Smokin' Showdowns.html" :class="[textStylePrimary, hoverTextStylePrimary]">Smokin' Showdowns</a></li>
                        <li><a id="Cigarette Carnage-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out" href="Cigarette Carnage.html" :class="[textStylePrimary, hoverTextStylePrimary]">Cigarette Carnage</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out" href="signin.html" :class="[textStylePrimary, hoverTextStylePrimary]">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="signup.html" :class="[signUpButtonText, signUpButtonHover, signUpButtonGradient]"><span class="relative inline-flex items-center">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="signUpButtonArrow">-&gt;</span></span></a></li>
                </ul>
    
                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" :class="[textStylePrimary,hoverTextStylePrimary]">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5" :class="signUpButtonGradient">
                            <li><a id="mobile-Brutal Battles-link" class="flex font-medium text-sm py-1.5" href="Brutal Battles.html" :class="[textStylePrimary,hoverTextStylePrimary]">Brutal Battles</a></li>
                            <li><a id="mobile-Smash and Trash-link" class="flex font-medium text-sm py-1.5" href="Smash and Trash.html" :class="[textStylePrimary,hoverTextStylePrimary]">Smash and Trash</a></li>
                            <li><a id="mobile-Ashtray Arenas-link" class="flex font-medium text-sm py-1.5" href="Ashtray Arenas.html" :class="[textStylePrimary,hoverTextStylePrimary]">Ashtray Arenas</a></li>
                            <li><a id="mobile-Smokin' Showdowns-link" class="flex font-medium text-sm py-1.5" href="Smokin' Showdowns.html" :class="[textStylePrimary,hoverTextStylePrimary]">Smokin' Showdowns</a></li>
                            <li><a id="mobile-Cigarette Carnage-link" class="flex font-medium text-sm py-1.5" href="Cigarette Carnage.html" :class="[textStylePrimary,hoverTextStylePrimary]">Cigarette Carnage</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                textStylePrimary: 'text-slate-300',
                hoverTextStylePrimary: 'hover:text-white',
                signUpButtonText: "text-slate-300",
                signUpButtonHover: "hover:text-white",
                signUpButtonGradient: "[background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box]",
                signUpButtonArrow: "text-purple-500",
            };
        },
    });
                    