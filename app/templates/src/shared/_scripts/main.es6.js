// Main javascript entry point
// Should handle bootstrapping/starting application
import { Link } from '../_modules/Atoms/link/link';

// ----------------------------
// Initialization
// ----------------------------
let page = $('body').data('page');

page === 'main' && Link.init();