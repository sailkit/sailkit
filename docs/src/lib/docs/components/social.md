---
title: Social
---

<script lang="ts">
  import Block from '$lib/components/Block.svelte';
</script>

# Social

A container component for social network links and icons. Manages the layout and
styling of social media elements, which are added using the Social.Element
nested component.

```svelte
<Social mode="vertical" align="left" iconSize="30px">
  <Social.Element name="linkedin" href="https://linkedin.com/in/profile">Connect on LinkedIn</Social.Element>
  <Social.Element name="github" href="https://github.com/profile">Follow on GitHub</Social.Element>
</Social>
```

| **Prop**                 | **Type**                  | **Default**                          | **Unit**        | **Description**                         |
| ------------------------ | ------------------------- | ------------------------------------ | --------------- | --------------------------------------- |
| align                    | left｜right｜center       | center                               | -               | Horizontal alignment of social elements |
| borderRadius             | string                    | 3px                                  | px              | Border radius for social elements       |
| class                    | string                    | -                                    | -               | CSS class name(s) for custom styling\*  |
| color                    | string                    | #333333                              | CSS color value | Text color for social elements          |
| containerBackgroundColor | string                    | -                                    | CSS color value | Background color of the container       |
| fontFamily               | string                    | Ubuntu, Helvetica, Arial, sans-serif | -               | Font family for text                    |
| fontSize                 | string                    | 13px                                 | px              | Font size for text                      |
| fontStyle                | normal｜italic｜oblique   | normal                               | -               | Font style for text                     |
| fontWeight               | number｜normal｜bold      | normal                               | -               | Font weight for text                    |
| iconHeight               | string                    | -                                    | px              | Fixed height for social icons           |
| iconPadding              | string                    | 0px                                  | px              | Padding around icons                    |
| iconSize                 | string                    | 20px                                 | px              | Size of social icons                    |
| innerPadding             | string                    | 4px                                  | px              | Inner padding for social elements       |
| lineHeight               | string                    | 22px                                 | px              | Line height for text                    |
| mode                     | horizontal｜vertical      | horizontal                           | -               | Layout direction                        |
| padding                  | string                    | 10px 25px                            | px              | Padding around the container            |
| paddingBottom            | string                    | -                                    | px              | Bottom padding                          |
| paddingLeft              | string                    | -                                    | px              | Left padding                            |
| paddingRight             | string                    | -                                    | px              | Right padding                           |
| paddingTop               | string                    | -                                    | px              | Top padding                             |
| textDecoration           | underline｜overline｜none | none                                 | -               | Text decoration style                   |
| textPadding              | string                    | 4px 4px 4px 0                        | px              | Padding around text                     |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

### Social.Element

An individual social network link and icon element. Must be used within a Social
component.

```svelte
<Social.Element name="github" href="https://github.com/profile" iconSize="25px" backgroundColor="#333" color="#fff">
  Follow us
</Social.Element>
```

| **Prop**        | **Type**                  | **Default**                          | **Unit**        | **Description**                        |
| --------------- | ------------------------- | ------------------------------------ | --------------- | -------------------------------------- |
| align           | left｜right｜center       | center                               | -               | Horizontal alignment                   |
| alt             | string                    | -                                    | -               | Alternative text for the icon          |
| backgroundColor | string                    | -                                    | CSS color value | Background color for the element       |
| borderRadius    | string                    | 3px                                  | px              | Border radius                          |
| class           | string                    | -                                    | -               | CSS class name(s) for custom styling\* |
| color           | string                    | #333333                              | CSS color value | Text color                             |
| fontFamily      | string                    | Ubuntu, Helvetica, Arial, sans-serif | -               | Font family                            |
| fontSize        | string                    | 13px                                 | px/em           | Font size                              |
| fontStyle       | normal｜italic｜oblique   | normal                               | -               | Font style                             |
| fontWeight      | number｜normal｜bold      | normal                               | -               | Font weight                            |
| href            | string                    | -                                    | URL             | URL for the social link                |
| iconHeight      | string                    | -                                    | px              | Fixed height for the icon              |
| iconPosition    | left｜right               | -                                    | -               | Position of icon relative to text      |
| iconSize        | string                    | 20px                                 | px              | Size of the icon                       |
| lineHeight      | string                    | 22px                                 | px              | Line height                            |
| name            | SocialNetwork             | -                                    | -               | Name of the social network (required)  |
| padding         | string                    | 4px                                  | px              | Padding around the element             |
| paddingBottom   | string                    | -                                    | px              | Bottom padding                         |
| paddingLeft     | string                    | -                                    | px              | Left padding                           |
| paddingRight    | string                    | -                                    | px              | Right padding                          |
| paddingTop      | string                    | -                                    | px              | Top padding                            |
| rel             | string                    | -                                    | -               | Relationship attribute for the link    |
| src             | string                    | -                                    | URL             | Custom icon source URL                 |
| srcset          | string                    | -                                    | -               | Srcset attribute for responsive images |
| target          | string                    | \_blank                              | -               | Target attribute for the link          |
| textDecoration  | underline｜overline｜none | none                                 | -               | Text decoration style                  |
| title           | string                    | -                                    | -               | Title attribute for the link           |
| verticalAlign   | top｜middle｜bottom       | middle                               | -               | Vertical alignment                     |

<p class="text-xs">
* CSS class name(s) that correspond to styles defined in the Head component's styles prop.
</p>

<Block>
Supported social networks include: facebook, twitter, x, google, pinterest, linkedin, tumblr, xing, github, instagram, web, snapchat, youtube, vimeo, medium, soundcloud, dribbble
</Block>
