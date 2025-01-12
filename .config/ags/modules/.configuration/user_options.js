
import userOverrides from '../../user_options.js';

// Defaults
let configOptions = {
    // General stuff
    'ai': {
        'defaultGPTProvider': "openai",
        'defaultTemperature': 0.9,
        'enhancements': true,
        'useHistory': true,
        'writingCursor': " ...", // Warning: Using weird characters can mess up Markdown rendering
        'proxyUrl': null, // Can be "socks5://127.0.0.1:9050" or "http://127.0.0.1:8080" for example. Leave it blank if you don't need it.
    },
    'animations': {
        'choreographyDelay': 35,
        'durationSmall': 110,
        'durationLarge': 180,
    },
    'appearance': {
        'keyboardUseFlag': false, // Use flag emoji instead of abbreviation letters
        'layerSmoke': false,
        'layerSmokeStrength': 0.2,
        'fakeScreenRounding': true,
    },
    'apps': {
        'bluetooth': "blueberry",
        'imageViewer': "loupe",
        'network': "XDG_CURRENT_DESKTOP=\"gnome\" gnome-control-center wifi",
        'settings': "XDG_CURRENT_DESKTOP=\"gnome\" gnome-control-center wifi",
        'taskManager': "gnome-usage",
        'terminal': "foot", // This is only for shell actions
    },
    'battery': {
        'low': 20,
        'critical': 10,
        'warnLevels': [20, 15, 5],
        'warnTitles': ["Low battery", "Very low battery", 'Critical Battery'],
        'warnMessages': ["Plug in the charger", "You there?", 'PLUG THE CHARGER ALREADY'],
    },
    'music': {
        'preferredPlayer': "plasma-browser-integration",
    },
    'onScreenKeyboard': {
        'layout': "qwerty_full", // See modules/onscreenkeyboard/onscreenkeyboard.js for available layouts
    },
    'overview': {
        'scale': 0.18, // Relative to screen size
        'numOfRows': 2,
        'numOfCols': 5,
        'wsNumScale': 0.09,
        'wsNumMarginScale': 0.07,
    },
    'sidebar': {
        'imageColumns': 2,
        'imageBooruCount': 20,
        'imageAllowNsfw': false,
    },
    'search': {
        'engineBaseUrl': "https://www.google.com/search?q=",
        'excludedSites': ["quora.com"],
    },
    'time': {
        // See https://docs.gtk.org/glib/method.DateTime.format.html
        // Here's the 12h format: "%I:%M%P"
        // For seconds, add "%S" and set interval to 1000
        'format': "%H:%M",
        'interval': 5000,
        'dateFormatLong': "%A, %d/%m", // On bar
        'dateInterval': 5000,
        'dateFormat': "%d/%m", // On notif time
    },
    'weather': {
        'city': "",
    },
    'workspaces': {
        'shown': 10,
    },
    // Longer stuff
    'icons': {
        substitutions: {
            'code-url-handler': "visual-studio-code",
            'Code': "visual-studio-code",
            'GitHub Desktop': "github-desktop",
            'Minecraft* 1.20.1': "minecraft",
            'gnome-tweaks': "org.gnome.tweaks",
            'pavucontrol-qt': "pavucontrol",
            'wps': "wps-office2019-kprometheus",
            'wpsoffice': "wps-office2019-kprometheus",
            '': "image-missing",
        }
    },
    'keybinds': {
        // Format: Mod1+Mod2+key. CaSe SeNsItIvE!
        // Modifiers: Shift Ctrl Alt Hyper Meta
        // See https://docs.gtk.org/gdk3/index.html#constants for the other keys (they are listed as KEY_key)
        'overview': {
            'altMoveLeft': "Ctrl+b",
            'altMoveRight': "Ctrl+f",
            'deleteToEnd': "Ctrl+k",
        },
        'sidebar': {
            'apis': {
                'nextTab': "Page_Down",
                'prevTab': "Page_Up",
            },
            'options': { // Right sidebar
                'nextTab': "Page_Down",
                'prevTab': "Page_Up",
            },
            'pin': "Ctrl+p",
            'cycleTab': "Ctrl+Tab",
            'nextTab': "Ctrl+Page_Down",
            'prevTab': "Ctrl+Page_Up",
        },
    },
}

// Override defaults with user's options
function overrideConfigRecursive(userOverrides, configOptions = {}) {
    for (const [key, value] of Object.entries(userOverrides)) {
        if (typeof value === 'object') {
            overrideConfigRecursive(value, configOptions[key]);
        } else {
            configOptions[key] = value;
        }
    }
}
overrideConfigRecursive(userOverrides, configOptions);

globalThis['userOptions'] = configOptions;
export default configOptions;