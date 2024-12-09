import { BlogPost } from "../../components/BlogPost";

const RicingMacOS = () => {
  return (
    <BlogPost
      title="Ricing MacOS"
      date="November 1, 2023"
      content={
        <>
          <p>
            Recently a screenshot of my MacOS rice blew up on X (formerly
            Twitter), eventually becoming my most liked post of all time. In
            this post, I'll break down my setup and share the tools and
            configurations I use to achieve this minimal, productive
            environment.
          </p>

          <h2>The Terminal Setup</h2>
          <p>
            At the heart of my setup is iTerm2 with a custom color scheme that
            matches my overall theme. I use the JetBrains Mono font for its
            excellent readability and ligature support.
          </p>

          <h2>Window Management</h2>
          <p>
            For window management, I use Yabai, a tiling window manager for
            macOS. It allows me to control window placement and sizing with
            keyboard shortcuts, creating a more efficient workflow.
          </p>

          <pre>
            <code>
              {`# Example Yabai configuration
yabai -m config layout bsp
yabai -m config window_placement second_child
yabai -m config split_ratio 0.50`}
            </code>
          </pre>

          <h2>Status Bar</h2>
          <p>
            The clean status bar you see is achieved using Simple Bar, a custom
            status bar that integrates with Yabai and provides system
            information in a minimal way.
          </p>
        </>
      }
    />
  );
};

export default RicingMacOS;
