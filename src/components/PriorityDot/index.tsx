import "./PriorityDot.scss"

export const PriorityDot = ({ isHighPriority }: { isHighPriority: boolean }) => {
  return (
    <div className={`PriorityDot ${isHighPriority ? 'PriorityDot--high' : ''}`} />
  )
}