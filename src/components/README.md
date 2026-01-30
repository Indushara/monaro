# Component Structure

This directory contains all reusable components organized by their purpose.

## Directory Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx   # Button component with variants
│   │   ├── Card.tsx     # Card container component
│   │   └── StatBox.tsx  # Statistics display box
│   │
│   └── sections/        # Page sections/components
│       ├── Hero.tsx            # Hero section with branding
│       ├── FeaturedListings.tsx # Property listings section
│       ├── Services.tsx        # Services showcase section
│       ├── TrustedPartner.tsx  # About/Trust section
│       └── Footer.tsx          # Footer component
│
└── app/
    ├── page.tsx         # Main page (composes all sections)
    ├── layout.tsx       # Root layout
    └── globals.css      # Global styles
```

## Component Usage

### UI Components

#### Button
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" icon={<span>→</span>}>
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `outline`

#### Card
```tsx
import { Card } from '@/components/ui/Card';

<Card>
  <div>Content</div>
</Card>
```

#### StatBox
```tsx
import { StatBox } from '@/components/ui/StatBox';

<StatBox 
  value="50+" 
  label="LOCATIONS" 
  variant="primary" 
/>
```

Variants: `primary`, `secondary`, `brown`

### Section Components

All section components are self-contained and can be imported directly:

```tsx
import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { Services } from '@/components/sections/Services';
import { TrustedPartner } from '@/components/sections/TrustedPartner';
import { Footer } from '@/components/sections/Footer';
```

## Styling

- Uses Tailwind CSS v4
- Color scheme: Purple (#9333ea) as primary brand color
- Responsive design with mobile-first approach
- Custom scrollbar styling

## Adding New Components

1. **UI Components**: Add to `src/components/ui/`
2. **Sections**: Add to `src/components/sections/`
3. **Types**: Define TypeScript interfaces within component files or create a `types/` directory
