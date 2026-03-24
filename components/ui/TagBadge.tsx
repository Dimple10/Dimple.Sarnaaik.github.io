interface TagBadgeProps {
  label: string
  variant?: 'gold' | 'muted'
}

export default function TagBadge({ label, variant = 'muted' }: TagBadgeProps) {
  return (
    <span className={variant === 'gold' ? 'tag-gold' : 'tag-muted'}>
      {label}
    </span>
  )
}
