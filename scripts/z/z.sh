#

# files=$(ls "src/**/*.css")

# for f in ./*.css; do
#     [[ -e $f ]] || continue
#     # size=$(wc -c <"$f")
#     size=$(stat -c %s -- "$f")

#     echo $f
# done

for file in *.css; do
    mv "$file" "$(basename "$file" .css).scss"
done

# Rename all *.txt to *.text
# for f in $files; do
#     # mv -- "$f" "${f%.css}.scss"
#     echo $f
# done

# for f in src/**/*.css; do
#     mv -- "$f" "$(basename -- "$f" .css).scss"
# done
