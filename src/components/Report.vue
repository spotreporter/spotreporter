<template>
  <article class="p-4 flex space-x-4">
    <!-- <img :src="recipe.image" alt="" class="flex-none w-18 h-18 rounded-lg object-cover" width="144" height="144" /> -->
    <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 class="text-lg font-semibold text-black mb-0.5">
        {{ report.spotname }}
      </h2>
      <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
        <div>
          <dt class="sr-only">Time</dt>
          <dd>
            <abbr :title="`${report.date} date`">{{ report.date }}</abbr>
          </dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<script>
export default {
  props: ['report'],
}
</script>
