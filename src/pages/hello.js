import { Heading, Highlight } from "@chakra-ui/react"

export default function GreetingPage() {
  return (
    <>
      <Heading lineHeight="tall">
        <Highlight
          query="interested"
          styles={{ px: "2", py: "1", rounded: "full", bg: "green.200" }}
        >
          Greeting to my site, hope you interested in my home
        </Highlight>
      </Heading>
    </>
  )
}
