// Main javascript entry point
// Should handle bootstrapping/starting application
import { Link } from '../_modules/atoms/link/link'

// ----------------------------
// Initialization
// ----------------------------
let page = $('body').data('page')
svg4everybody()

page === 'main' && Link.init()