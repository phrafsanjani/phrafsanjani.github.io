function hfun_bar(vname)
  val = Meta.parse(vname[1])
  return round(sqrt(val), digits=2)
end

function hfun_m1fill(vname)
  var = vname[1]
  return pagevar("index", var)
end

function lx_baz(com, _)
  # keep this first line
  brace_content = Franklin.content(com.braces[1]) # input string
  # do whatever you want here
  return uppercase(brace_content)
end

function hfun_add_bsky_comments(post_url::Vector{String})
    post = post_url[1]
    html = "
        <script src=\"../bsky-comments.js\"></script>
        <bsky-comments post=\"$(post)\"></bsky-comments>
    "
    return html
end