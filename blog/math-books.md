# If I Had to Learn Math Again, This Would Be My Reading List

\toc

## Introduction

I have been involved in doing research on mathematical statistics for almost more than a year now,
and so I had to look through so many books and papers.
Doing research was an important and beautiful step in my academic journey:
I had to work on something I didn't know about, but I had to learn with a purpose in my mind.
Nowadays, I try to do things that I only have a reason to do,
since that reason will serve as my motivation to go forward.
While grades may be a sufficient reason to study in undergrad,
I find that having a problem in mind, starting with the big picture,
and then reading and learning what is needed is a more satisfying way to study:
basically a top-down approach.

However, some foundations are best built during undergraduate studies,
as they can save a lot of time and hassle in further studies.
In the case of mathematical statistics, for instance, a strong knowledge of calculus, probability, and elementary statistics is very important.
Additionally, a good foundation in measure-theoretic probability, and in general, real analysis, proves helpful in accessing much more literature in the field.

As another example, when I was going through the literature on linear models,
I was amazed at the amount of linear and matrix algebra used.
On the other hand, I was also disappointed that our undergrad probability courses had not covered probability in higher dimensions, with topics on random vectors and such.

So I have been looking for good resources, those that have pedagogical value and are comprehensive enough.
I decided to share my findings in this blog post.
These days, many lecture notes and course materials are sufficient to build these mathematical foundations, and of course, many textbooks grow out of these lecture notes.
However, the books I've listed here are the ones I would read cover to cover if I were learning the material on my own for the first time.
I hope these suggestions can be useful to others as well.

## Probability and Statistics

[Chan's *Introduction to Probability for Data Science*](https://probability4datascience.com/) is a relatively more recent book on probability.
While it doesn't cover measure-theoretic probability, I find it to be a good balance between theory and applications.
It is freely available online, and it covers not just probability, but a lot of elementary statistics topics and even regression.
Its treatment of random vectors, covariance and correlation matrices, along with its abundant visual explanations, landed this book on my shortlist for this section.
Please note, however, that I recall encountering some errors in this book.

For mathematical statistics, I found Hogg's *Introduction to Mathematical Statistics* to be an easier read compared to many other books.
The other one I liked and found to be very comprehensive (specifically on hypothesis testing) is Ron C. Mittelhammer's
*Mathematical Statistics for Economics and Business*,
but I remember I had trouble with the notation.

I hope to get my hands on *The Simple and Infinite Joy of Mathematical Statistics* by J.N. Corcoran
to see if it can replace Hogg's book here, as I think while Corcoran's may not cover as much material as Hogg's,
it focuses on the most important topics and offers greater pedagogical value.
[Her videos](https://www.youtube.com/playlist?list=PLLyj1Zd4UWrPZH-fknPLak0tlUpUISBZR) surely attest to that!
~~~
<div class="card-container">
    <div class="card">
        <img src="/assets/covers/probability-chan.jpg">
        <div class="card-content">
            <p id="book-title">Introduction to Probability for Data Science</p>
            <p id="author">Stanley H. Chan</p>
        </div>
    </div>
    <div class="card">
        <img src="/assets/covers/stats-hogg.jpg">
        <div class="card-content">
            <p id="book-title">Introduction to Mathematical Statistics</p>
            <p id="author">Robert V. Hogg & Joseph W. McKean & Allen T. Craig</p>
        </div>
    </div>
</div>
~~~

## Linear and Matrix Algebra

One concept I always wanted to see in linear and matrix algebra textbooks was the notion of convergence and limits for matrices and vectors.
I first encountered this in numerical linear algebra, and later with the concept of continuity in linear models.

Then one night, while browsing [James E. Gentle's library](https://mason.gmu.edu/~jgentle/LibraryThing.htm),
I came across Johnston's *Advanced Linear and Matrix Algebra* and found a comprehensive treatment of these topics.
Looking through the reviews and seeing that readers were also satisfied with his first book,
I myself read a little bit and found it promising.

So, I've decided to list his books as my suggestions for this section,
even though I haven't read them extensively.
~~~
<div class="card-container">
    <div class="card">
        <img src="/assets/covers/intro-linear-johnston.jpg">
        <div class="card-content">
            <p id="book-title">Introduction to Linear and Matrix Algebra</p>
            <p id="author">Nathaniel Johnston</p>
        </div>
    </div>
    <div class="card">
        <img src="/assets/covers/advanced-linear-johnston.jpg">
        <div class="card-content">
            <p id="book-title">Advanced Linear and Matrix Algebra</p>
            <p id="author">Nathaniel Johnston</p>
        </div>
    </div>
</div>
~~~

## Real Analysis

Real analysis is a foundational field, forming the basis of calculus and, in some programs,
serving as a prerequisite for topology (the contents of real analysis courses vary widely).
With a strong foundation in real analysis, I believe measure-theoretic probability can be learned along the way if needed.
Researchers more oriented toward applied statistics may never need it or may only require a very limited amount.
(I like [this blog post](https://danieltakeshi.github.io/2016/12/20/review-of-theoretical-statistics-stat-210a-at-berkeley/) for a more detailed perspective on this matter.)

Tao's *Analysis I* is one of the most beautiful books I have come across in math.
Starting from the very beginnings, he tries to define every concept himself,
before getting to the real analysis topics.
After reading through the first chapters, I started to ask a lot of *why*'s in my other math courses as well.

But if I had a strong foundation in mathematics and logic in the first place,
I would probably go with Lindstrøm's *Spaces: An Introduction to Real Analysis*.
The title itself is smart and creative,
suggesting that analysis is the study of spaces: metric spaces, measure spaces, probability spaces, etc.

I have to confess that I have not had the time to look through this one thoroughly,
but I have seen excellent reviews.
Another interesting thing that caught my attention was its ordering and comprehensive coverage of real analysis topics,
which also includes measure theory.
~~~
<div class="card-container">
    <div class="card">
        <img src="/assets/covers/analysis-tao.jpg">
        <div class="card-content">
            <p id="book-title">Analysis I</p>
            <p id="author">Terence Tao</p>
        </div>
    </div>
    <div class="card">
        <img src="/assets/covers/spaces-lindstrom.jpg">
        <div class="card-content">
            <p id="book-title">Spaces: An Introduction to Real Analysis</p>
            <p id="author">Tom L. Lindstrøm</p>
        </div>
    </div>
</div>
~~~

## Foundation of Mathematics

Tao's *Analysis I*, as suggested in the previous section, has a beautiful introduction to foundations of mathematics,
such as set theory, functions, an appendix on logic and more.
However, a dedicated resource on this material with comprehensive coverage of logic, cardinality, and Gödel's theorems can be also be a worthy resource.
One such resource is a free Persian book, *Foundation of Mathematics* by Mohsen Khani, which I believe has emerged from his lectures for a course of the same name.
~~~
<div class="card-container">
    <div class="card">
        <img src="/assets/covers/foundation-of-math-khani.jpg">
        <div class="card-content">
            <p id="book-title">Foundation of Mathematics</p>
            <p id="author">Mohsen Khani</p>
        </div>
    </div>
</div>
~~~

## Economics
~~~
<div class="card-container">
    <div class="card">
        <div id="normal-card" class="visible-content">
        <img src="/assets/covers/economics-mankiw.jpg">
        <div class="card-content">
            <p id="book-title">Principles of Economics</p>
            <p id="author">N. Gregory Mankiw</p>
        </div>
        </div>
    </div>
</div>
~~~